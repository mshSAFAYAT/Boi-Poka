  
import React from "react";


const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper green">
          <a className="brand-logo" style={{ marginLeft: 15}}>
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