import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-background-section">
      <div className="footer-parent-div">
        <p className="tc-text">Theme by Colorlib Powered by WordPress</p>
        <br />
        <div className="sm-logo-div">
          <div>
            <i className="fa-brands fa-square-facebook"></i>
          </div>
          <div>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div>
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div>
            <i className="fa-brands fa-square-youtube"></i>
          </div>
          <div>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="go-back-to-top-parent-div">
        <a className="back-to-top" href="#top">
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
