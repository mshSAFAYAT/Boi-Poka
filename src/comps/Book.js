import { React } from "react";
import { Link } from 'react-router-dom';

const Book = (props) => {
  const ImagePath = props.data.volumeInfo.imageLinks;
  return (
    <div className="col s12 m3">
      <div className="card large">
        <div className="card-image" style={{ marginBottom: 10 }}>
          {ImagePath == null ? (
            <img
              src="https://picsum.photos/200/300"
              style={{ width: "100", height: "200" }} alt=""
            />
          ) : (
              <img src={ImagePath.smallThumbnail} alt="" style={{ width: "290px", height: "320px" }} />
            )}
        </div>
        <div className="card-content">
          <span className="card-title" style={{ fontWeight: "bold" }}> {props.data.volumeInfo.title}</span>
          <div className="card-action">
            <Link
              to={{
                pathname: "/volumes/" + props.data.id,
                volumeId: props.data.id,
              }}
            >
              See Book Details
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Book;