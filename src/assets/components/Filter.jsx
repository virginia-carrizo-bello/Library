import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import ListBook from "./ListBook";
import './filter.css';
import { SearchOutlined } from '@ant-design/icons';
const { Content } = Layout;

const Filter = ({ collapsed, toggleCollapse, books, handleOpenShow }) => {

    const [booksFilter, setBooksFilter] = useState(books);
    const [showAll, setShowAll] = useState(true);
    const [filter, setFilter] = useState("")

    const handleFilter = (event) => {
        const filterValue = event.target.value.trim();
        setFilter(filterValue)
        setBooksFilter(
            filterValue === ""
                ? []
                : books.filter((book) =>
                    book.book.genre.toLowerCase().includes(filterValue.toLowerCase())
                )
        );
        setShowAll(filterValue === "");
    };

    return (
        <div
            style={{
                padding: 0,
                background: '#f7f3e9',
            }}
        >

            <div className='filter-bar'>
                <div >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={toggleCollapse}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </div>
                <div className='buscar'>

                    <img className='img-logo' src="src\assets\public\logo.png" alt="logo" />

                    <p>Buscá por género</p>
                    <input
                        type="text"
                        placeholder="Ejemplo: Terror"
                        onChange={handleFilter}
                    />
                    <Button icon={<SearchOutlined />} />
                </div>
            </div>

            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: '#f7f3e9',
                }}
            >
                {showAll ? (

                    <div className="books">
                        <ListBook booksFilter={books} books={books} handleOpenShow={handleOpenShow} />
                    </div>
                ) : (
                    <div className="listbooks">
                        <ListBook booksFilter={booksFilter} books={books} handleOpenShow={handleOpenShow} 
                        filter={filter}/>
                    </div>
                )}
            </Content>



        </div>
    );
};

export default Filter;
