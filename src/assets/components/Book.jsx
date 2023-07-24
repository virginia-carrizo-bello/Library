import './book.css'

export default function Book({ booktitle, bookcover, bookgenre }) {

    return (
        <div >
            <div className="book">
                <img src={bookcover} alt="Libro 1" />
                <p className='titulo-libro'>Título: "{booktitle}"</p>
                <p className='genero-libro'>Género: {bookgenre}</p>
            </div>
        </div>
    );
}