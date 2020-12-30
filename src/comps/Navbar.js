
import React from "react";


const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper green">
          <a className="brand-logo" style={{ marginLeft: 15 }}>
          <img src={"https://previews.123rf.com/images/marlene9/marlene91708/marlene9170800089/83739329-vector-cute-carton-bookworm-in-glasses-reading-book-vector-bookworm-in-glasses-bookworm-vector-illus.jpg"}
          alt=""
          style={{height: "65px" }} />
          </a>
          <a className="brand-logo" style={{ marginLeft: 800 }}>
            Boi Poka
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Popular Movies</a>
            </li>
            <li>
              <a href="badges.html">TV Shows</a>
            </li>
            <li>
              <a href="collapsible.html">Profile</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;