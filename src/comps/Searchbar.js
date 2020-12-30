import React from "react";

const Searchbar = (props) => {
  return (
    <div style={{alignItems:"center"}}>
      <div className="container">
        <div className="row">
          <section className="col s6 offset-s4">
            <form action="" onSubmit={props.handleSubmit}>
              <div className="input-field">
                <input
                  placeholder="Search for Books"
                  type="text"
                  onChange={props.handleChange}
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;