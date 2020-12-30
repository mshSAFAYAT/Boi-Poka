import React, { Text,useEffect, useState } from 'react'
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

        <div className="col s12 m8" >
            <div className="card" >
                <div className="card-image" style={{alignSelf:'center',paddingLeft:250 }} >
                    {currentImage == "" ? (
                        <img
                            src="https://picsum.photos/200/300"
                            style={{alignContent:"center", width: 200, height: 350}}
                        />
                    ) : (
                            <img src={currentImage} alt="" style={{alignContent:"center", width: 200, height: 350}}/>
                        )}
                </div>
                <div className="card-title" style={{ fontWeight: "bold" }}> {currentBook.title} </div>
                <div className="card-title"  style={{ color: 'black' }}>Author: {currentBook.authors}</div>
                <div className="card-title"  style={{color: 'black'}}>Publish Date: {currentBook.publishedDate}</div>
                <div className="card-title"  style={{color: 'black'}}>Description: {currentBook.description}</div>
                <div className="card-action">
                    <Link to='/'>Go to search page</Link>
                </div>
            </div>

        </div>
    )
}
export default BookDetails; 