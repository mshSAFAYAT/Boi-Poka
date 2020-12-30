import React, { Text, useEffect, useState } from 'react'
import { getBookDetails } from '../api/GBA'
import { Link } from 'react-router-dom'

const BookDetails = (props) => {
    console.log(props)
    const [currentBook, setCurrentBook] = useState({});

    const [currentImage, setCurrentImage] = useState('')
    useEffect(() => {
        getBookDetails(props.location.volumeId, setCurrentBook, setCurrentImage)
    }, []);
    //console.log(currentBook)

    //console.log(currentImage);
    return (
        <div>
            <div className="row">
                <div className="col s12 m7" >
                    <div className="card horizontal" >
                        {currentImage == "" ? (
                            <img
                                className="activator"
                                src="https://picsum.photos/200/300"
                                style={{ height: "300px", width: "150%" }}
                            />
                        ) : (
                                <img src={currentImage} alt="" className="activator" style={{ height: "300px", width: "150%" }} />
                            )}
                        <div></div>
                        <div>
                            <span className="card-title" style={{ fontWeight: "bold" }}> {currentBook.title} </span>
                        </div>
                        <div></div>
                        <div className="card-content">
                            <p style={{ color: 'black', fontWeight: 'bold' }}>Author: {currentBook.authors}</p>
                            <p p style={{ color: 'black' }}>Publish Date: {currentBook.publishedDate}</p>
                            <p ppstyle={{ color: 'black' }}>Description: {currentBook.description}</p>
                        </div>
                        <div></div>
                        <div className="card-action">
                            <Link to='/'>Go to search page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookDetails; 