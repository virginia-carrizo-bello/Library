import React from 'react';
import { Menu } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import './toread.css'

const ToRead = ({ handleCloseShow, listBooks, collapsed }) => {
console.log(listBooks)
  return (
    <div>
      <div />
      {collapsed ? <div>
        <Menu mode="inline"
        style={{
          backgroundColor: '#dfcfa7',
        }}>
        <p className='pendiente'>Para leer:</p>
        {listBooks.map((b) => (
          <div className='sidebar-oculta' key={b.book.title}>
            <Menu.Item key={b.book.title} style={{
              padding: '0px',
              paddingLeft: '0px',
              height: '75px',
            }} >
              <img className="sidebar-book-oculto" src={b.book.cover} alt="Libro" />
            </Menu.Item>
          </div>
        ))}
      </Menu>
      </div> : 
      <div>
      <Menu mode="inline"
      style={{
        backgroundColor: '#dfcfa7',
      }}>
      <p className='pendiente'>Para leer:</p>
      {listBooks.map((b) => (
        <div className='sidebar' key={b.book.title}>
          <Menu.Item key={b.book.title} style={{
            height: '75px',
            alignItems: 'baseline'
          }} >
            <img className="sidebar-book" src={b.book.cover} alt="Libro" />
          </Menu.Item>
          <button className='borrar' onClick={() => handleCloseShow(b)}><DeleteOutlined /></button>
        </div>
      ))}
    </Menu>
    </div>
      }
    </div>
  );
};

export default ToRead;


