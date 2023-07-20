import Book from "./Book";


export default function ListBook({books, booksFilter, handleOpenShow}){



    return (
        <>
            <p>Libros disponibles: {books.length}</p>
            <div className="book-container">
                {booksFilter.map((b, key) => {
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
    )
}