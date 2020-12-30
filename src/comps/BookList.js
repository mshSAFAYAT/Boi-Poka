import React from "react";
import Book from './Book';

const BookList = (props) => {
console.log(props.books);
  return (
    <div className="container">
      <div className="row">
        <div className="col s20">
         {props.books.map((book, i) => {
              //console.log(book)
            return <Book data={book} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BookList;