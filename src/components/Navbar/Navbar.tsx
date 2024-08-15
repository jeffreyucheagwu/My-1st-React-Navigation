import React from "react";
import "./Navbar.css";
import Login from "../../screens/LoginScreen/Login";

const Navbar = () => {
  return (
    <div className="parent-div">
      <div className="nav-bar">
        <div className="shapely">Shapely Demo</div>
        <div className="nav-bar-buttons">
          <div>
            <button type="button" className="home">
              HOME
            </button>
          </div>
          <div>
            <button type="button" className="blog">
              BLOG
            </button>
          </div>
          <div>
            <button type="button" className="portfolio">
              PORTFOLIO
            </button>
          </div>
          <div>
            <option value="button" className="about">
              ABOUT THE TESTS
            </option>
          </div>
          <div>
            <button type="button" className="level1">
              LEVEL1
            </button>
          </div>
          <div>
            <button type="button" className="shop">
              SHOP
            </button>
          </div>
          <div>
            <button type="button" className="search-icon">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
