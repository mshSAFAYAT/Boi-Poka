import axios from "axios";

const GBA = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});
let totalItems = 0;
const getBooksByTerm = (
  SearchTerm,
  setBooks,
  page_number,
  setTotalPages
) => {
  GBA.get("/volumes", {
    params: {
      q: SearchTerm,
      //key: "AIzaSyCQ5_XYD4kw5l3KVFTpfAWFqssOBsTRC4M",
      startIndex: page_number,
      maxResults: 16,
    },
  }).then((response) => {
    console.log(response.data.totalItems);
    totalItems = response.data.totalItems;
    setBooks(response.data.items);
    let pages = Math.ceil(totalItems / 20);
    if (page_number == 1) {
      setTotalPages(pages)
    };
  });
};

const getBookDetails = (bookId, setCurrentBook, setCurrentImage) => {
  GBA.get("volumes/" + bookId).then((response) => {
    //console.log(response.data.volumeInfo);
    setCurrentBook(response.data.volumeInfo);
    {
      response.data.volumeInfo.imageLinks == undefined
        ? setCurrentImage("")
        : setCurrentImage(response.data.volumeInfo.imageLinks.smallThumbnail);
    }
    // console.log(response.data.volumeInfo.imageLinks.thumbnail)
  });
};
export { getBooksByTerm,getBookDetails };