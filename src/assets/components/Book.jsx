import './book.css'

export default function Book({ booktitle, bookcover }) {

    return (
        <div >
            <div className="book">
                <img src={bookcover} alt="Libro 1" />
                <h2>{booktitle}</h2>
            </div>
        </div>
    );
}