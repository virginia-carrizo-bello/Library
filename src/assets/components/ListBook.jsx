import Book from "./Book";


export default function ListBook({ books, booksFilter, handleOpenShow, filter }) {



    return (
        <>
            <div className="contenedor-title">
                <div className="contenedor-title">
                    <img className='img-book' src="https://images.vexels.com/media/users/3/271649/isolated/preview/3a1938ea55f27c31d53b585fcebdcd5e-icono-de-dibujos-animados-de-libro-abierto.png" alt="libro" />
                    <h2 className="title" >Stock libros: {books.length}</h2>
                </div>
                {filter ? <div className="contenedor-title" > <img className='img-lupa' src="src\assets\public\lupa.png" alt="lupa" />
                    <h2 className="title-filter">Cantidad de libros de {filter}: {booksFilter.length} </h2> </div> : ""}
            </div>
            <div className="book-container">
                {booksFilter.map((b, key) => {
                    return (
                        <div key={key}>
                            <button className="boton" onClick={() => handleOpenShow(b)}>
                                <Book booktitle={b.book.title} bookcover={b.book.cover} bookgenre={b.book.genre} />
                            </button>
                        </div>
                    )
                })}
            </div >
        </>
    )
}