import { useEffect, useState } from "react"
import './toread.css'


export default function ToRead({ handleCloseShow, listBooks }) {

    return (
        <div className="modal-container">
            <p>Libros pendientes de leer: {listBooks.length}</p>
            {listBooks.map((b, key) => {
                return (
                    <div className="modal" key={key}>
                        <div className="modal-content">
                            <button onClick={() => handleCloseShow(b)}>X</button>
                            <div className="book">
                                <img src={b.book.cover} alt="Libro" />
                                <h2>{b.book.title}</h2>

                            </div>

                        </div>

                    </div>
                )
            })}

        </div>

    )
}