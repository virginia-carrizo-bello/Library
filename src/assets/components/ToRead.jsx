import { useEffect, useState } from "react"

export default function ToRead({ handleCloseShow, listBooks }) {

    console.log(listBooks)
    return (
        <div className="book-container">
            {listBooks.map((b, key) => {
                return (
                    <div className={`modal show`} key={key}>
                        <div className="modal-content">
                            <div className="book">
                                <img src={b.book.cover} alt="Libro" />
                                <h2>{b.book.title}</h2>
                            </div>

                        </div>

                    </div>
                )
            })}
            <button onClick={handleCloseShow}>Cerrar</button>
        </div>

    )
}