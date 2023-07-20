import { useEffect, useState } from "react";
import Book from "./Book";
import Filter from "./Filter";
import ToRead from "./ToRead";
import ListBook from "./ListBook";
import './book.css'


export default function Home() {

    const [books, setBooks] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [listBooks, setListBooks] = useState(() => {
        const storedBooks = localStorage.getItem("selectedBooks");
        return storedBooks ? JSON.parse(storedBooks) : [];
    })

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/midudev/pruebas-tecnicas/main/pruebas/01-reading-list/books.json`)
            .then(response => response.json())
            .then((json) => {
                /* console.log(json.library); */
                setBooks(json.library);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        localStorage.setItem("selectedBooks", JSON.stringify(listBooks));
    }, [listBooks]);

    const handleOpenShow = (book) => {
        setSelectedBook(book);
        setShow(true);
        setListBooks([...listBooks, book]);
        setBooks(books.filter((b) => b !== book))
    };

    const handleCloseShow = (book) => {
        /* setSelectedBook(null); */
        /* setShow(false); */
        setListBooks(listBooks.filter((b) => b !== book))
        setBooks([...books, book])
    };
 
    return (
        <>
            <Filter books={books} handleOpenShow={handleOpenShow}/>
            {show && selectedBook && (
                <ToRead
                    handleCloseShow={handleCloseShow}
                    booktitle={selectedBook.book.title}
                    bookcover={selectedBook.book.cover}
                    listBooks={listBooks}
                />
            )}

        </>

    );
}