import Navbar from './comps/Navbar';
import Searchbar from './comps/Searchbar';
import React, { useState } from 'react'
import { getBooksByTerm } from './api/GBA';
import BookList from './comps/BookList';
import Pagination from './comps/Pagination';
import Picker from './comps/SortPicker';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  let sortedBooks = [];
  const [sort, setSort] = useState("Newest");


  const handleChange = (event) => {
    //console.log(event.target.value)
    setSearchTerm(event.target.value)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksByTerm(searchTerm, setBooks, currentPage, setTotalPages);
  }

  const nextPage = async (page_number) => {
    let bookIndex = 20 * (page_number - 1);
    setCurrentPage(page_number);
    await getBooksByTerm(searchTerm, setBooks, bookIndex, setTotalPages);
  }

  const handleSort = (event) => {
    console.log(event.target.value);
    setSort(event.target.value);
    if (event.target.value === "Newest") {
      sortedBooks = books.sort((a, b) => {
        return parseInt(b.volumeInfo.publishedDate) - parseInt(a.volumeInfo.publishedDate)
      })
    }
    else if (event.target.value === "Oldest") {
      sortedBooks = books.sort((a, b) => {
        return parseInt(a.volumeInfo.publishedDate) - parseInt(b.volumeInfo.publishedDate)
      })
    }
    else if (event.target.value === "Ascending") {
      sortedBooks = books.sort((a, b) => {
        return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
      })
    }
    else if (event.target.value === "Descending") {
      sortedBooks = books.sort((a, b) => {
        return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
      })
      sortedBooks = sortedBooks.reverse();
    }
    setBooks(sortedBooks);
  }

  return (
    <div>
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Picker handleSort={handleSort} sort={sort} />
      <BookList books={books} />
      {totalPages > 1 ? (<Pagination
        nextPage={nextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      ) : ("")};
    </div>
  );
}

export default App;