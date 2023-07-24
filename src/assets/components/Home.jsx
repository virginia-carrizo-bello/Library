import React, { useEffect, useState } from 'react';
import { Layout, theme } from 'antd';
import ToRead from './ToRead';
import Filter from './Filter';


const { Sider } = Layout;

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

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
                <Filter collapsed={collapsed} toggleCollapse={toggleCollapse} colorBgContainer={colorBgContainer}
                    books={books} handleOpenShow={handleOpenShow} />

            </Layout>
        </Layout>
    );
};

export default Home;
