
import React from "react";
import Select from 'react-select';

const Picker = (props) => {
  return (
    <div className="container">
      <div className='row'>
        <section className="col s6 offset-s3">
          <div className="col s6 pull-s1" style={{ left: "40%" }}>
            <select color="green" className="browser-default dropdown select-css" defaultValue="Sort" onChange={props.handleSort}>
              <option disabled value="Sort">Choose a Sorting Option</option>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
              <option value="Ascending">A-Z</option>
              <option value="Descending">Z-A</option>
            </select>
          </div>
        </section>
      </div>
    </div >
  );
};
export default Picker;
