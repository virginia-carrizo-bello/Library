import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import ToRead from './ToRead';
import Filter from './Filter';

const { Sider } = Layout;

const Home = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [listBooks, setListBooks] = useState(() => {
        const storedBooks = localStorage.getItem("selectedBooks");
        return storedBooks ? JSON.parse(storedBooks) : [];
    })
    const [collapsed, setCollapsed] = useState(false);
   
    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/midudev/pruebas-tecnicas/main/pruebas/01-reading-list/books.json`)
            .then(response => response.json())
            .then((json) => {
                setBooks(json.library.filter(book => !listBooks.find(b => b.book.title === book.book.title)));
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        localStorage.setItem("selectedBooks", JSON.stringify(listBooks));
    }, [listBooks]);

    const handleOpenShow = (book) => {
        setSelectedBook(book);
        setListBooks([...listBooks, book]);
        setBooks(books.filter((b) => b !== book))
    };

    const handleCloseShow = (book) => {
        setListBooks(listBooks.filter((b) => b !== book))
        setBooks([...books, book])
    };

    return (
        <Layout >
            <Sider style={{
                backgroundColor: '#dfcfa7'
            }} 
            trigger={null} collapsible collapsed={collapsed}>
                <ToRead handleCloseShow={handleCloseShow}
                    listBooks={listBooks} collapsed={collapsed} />
            </Sider>
            <Layout>
                <Filter collapsed={collapsed} toggleCollapse={toggleCollapse} 
                    books={books} handleOpenShow={handleOpenShow} />

            </Layout>
        </Layout>
    );
};

export default Home;
