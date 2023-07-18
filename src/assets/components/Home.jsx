import { useEffect, useState } from "react";
import Book from "./Book";
import ToRead from "./ToRead";


export default function Home() {

    const [books, setBooks] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [listBooks, setListBooks] = useState([])

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/midudev/pruebas-tecnicas/main/pruebas/01-reading-list/books.json`)
            .then(response => response.json())
            .then((json) => {
                /* console.log(json.library) */;
                setBooks(json.library);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        const savedBooks = localStorage.getItem("selectedBooks");
        if (savedBooks) {
            setListBooks(JSON.parse(savedBooks))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("selectedBooks", JSON.stringify(listBooks));
    }, [listBooks]);

    const handleOpenShow = (book) => {
        setSelectedBook(book);
        setShow(true);
        setListBooks([...listBooks, book]);
    };
    const handleCloseShow = () => {
        setSelectedBook(null);
        setShow(false);
    };

    return (
        <>
            {show && selectedBook && (
                <ToRead
                    handleCloseShow={handleCloseShow}
                    booktitle={selectedBook.book.title}
                    bookcover={selectedBook.book.cover}
                    listBooks={listBooks}
                />
            )}
            <div className="book-container">
                {books.map((b, key) => {
                    return (
                        <div key={key}>
                            <button className="boton" onClick={() => handleOpenShow(b)}>
                                <Book booktitle={b.book.title} bookcover={b.book.cover} />
                            </button>
                        </div>
                    )
                })}
            </div >


        </>

    );
}