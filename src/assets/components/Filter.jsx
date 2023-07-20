import './filter.css'
import ListBook from "./ListBook";
import { useEffect, useState } from "react";

export default function Filter({ books, handleOpenShow }) {
  const [booksFilter, setBooksFilter] = useState(books);
  const [showAll, setShowAll] = useState(true);
  const [filter, setFilter]=useState("")

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
    <div>
      <title>Filtrado o Búsqueda</title>
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Buscar..."
          onChange={handleFilter}
        />
        <button>Buscar</button>
        <button className="filter-btn">Filtrar</button>
        <p>Cantidad de libros de {filter}: {booksFilter.length} </p>
        {showAll ? (
          <ListBook booksFilter={books} books={books} handleOpenShow={handleOpenShow} />
        ) : (
          <ListBook booksFilter={booksFilter} books={books} handleOpenShow={handleOpenShow} />
        )}
      </div>
    </div>
  );
}