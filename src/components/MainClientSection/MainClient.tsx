import React from "react";
import "./MainClient.css";
import a from "../../assets/imageSection/colorlib-logo.png";
import b from "../../assets/imageSection/js-logo.png";
import c from "../../assets/imageSection/html5-logo.png";
import d from "../../assets/imageSection/css-logo.png";
import e from "../../assets/imageSection/less-logo.png";
import f from "../../assets/imageSection/sass-logo.png";
import g from "../../assets/imageSection/bootstrap-logo.jpg";
import h from "../../assets/imageSection/adobe-logo.png";
import i from "../../assets/imageSection/facebook-logo.png";

const MainClient = () => {
  return (
    <div className="client-logo-backgroung-Section">
      <div className="omc-parent-div">
        <h1 className="omc-text">Our Main Clients</h1>

        <div className="clients-logo-div">
          <div>
            <img className="img" src={a} alt="" />
          </div>
          <div>
            <img className="img" src={b} alt="" />
          </div>
          <div>
            <img className="img" src={c} alt="" />
          </div>
          <div>
            <img className="img" src={d} alt="" />
          </div>
          <div>
            <img className="img" src={e} alt="" />
          </div>
          <div>
            <img className="img" src={f} alt="" />
          </div>
          <div>
            <img className="img" src={g} alt="" />
          </div>
          <div>
            <img className="img" src={h} alt="" />
          </div>
          <div>
            <img className="img" src={i} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainClient;
