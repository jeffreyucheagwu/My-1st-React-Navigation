import React from "react";
import "./LimitlessOption.css";
import img from "../../assets/images/photo-1440557653082-e8e186733eeb-1.jpg";

const LimitlessOption = () => {
  return (
    <div className="limitless-section>">
      <div className="limitless-parent-div">
        <div>
          <h1 className="text-limitless">Limitless Options</h1>
        </div>
        <div className="p-tag4">
          <p>
            Phasellus sed nisi ac dui interdum semper. Etiam consequat fermentum
            sollicitudin. Fusce vulputate porta faucibus. Vivamus nulla tellus,
            accumsan non efficitur id, pretium quis ante
          </p>
        </div>
        <div className="button-4">
          <button className="button4">DOWNLOAD NOW</button>
        </div>
        <div className="img-div4">
          <img src={img} className="img4" />
        </div>
      </div>
    </div>
  );
};

export default LimitlessOption;
