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
  const data = [
    { value: "newest", label: "Newest" },
    { value: "relevance", label: "Relevance" },
  ];

  const[sort,setSort]=useState("Newest");

  const pickerChange=(event)=>{
    setSort(event.value)
    //console.log(event)
  }
  const handleChange = (event) => {
    //console.log(event.target.value)
    setSearchTerm(event.target.value)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksByTerm(searchTerm, setBooks, sort, currentPage, setTotalPages);
  }

  const nextPage = async (page_number) => {
    let bookIndex = 20 * (page_number - 1);
    setCurrentPage(page_number);
    await getBooksByTerm(searchTerm, setBooks, sort, bookIndex, setTotalPages);
  }


  return (
    <div>
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Picker value={sort} data={data} handleChange={pickerChange}/>
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