import React from "react";
import "./Image.css";
import a from "../../assets/imageSection/photo-1443890484047-5eaa67d1d630-1.jpg";
import b from "../../assets/imageSection/photo-1422568374078-27d3842ba676-1.jpg";
import c from "../../assets/imageSection/photo-1447834353189-91c48abf20e1-1-1.jpg";
import d from "../../assets/imageSection/photo-1447877085163-3cce903855cd-1.jpg";
import e from "../../assets/imageSection/photo-1447958374760-1ce70cf11ee3-1-1.jpg";
import f from "../../assets/imageSection/photo-1430329429612-babb42f88673-1-1.jpg";
import g from "../../assets/imageSection/photo-1449057528837-7ca097b3520c-1-1.jpg";
import h from "../../assets/imageSection/photo-1449168013943-3a15804bb41c-1-1.jpg";
import i from "../../assets/imageSection/photo-1451186859696-371d9477be93-1-1.jpg";
import j from "../../assets/imageSection/photo-1448518184296-a22facb4446f-1-1.jpg";

const Image = () => {
  return (
    <div className="image-section-div">
      <div className="img-parent-div">
        <div>
          <img src={a} alt="" />
          <div style={{ color: "white" }} className="hover-div">
            Project #10
          </div>
        </div>
        <div>
          <img src={b} alt="" />
          <div style={{ color: "white" }} className="hover-div">
            Project #9
          </div>
        </div>
        <div>
          <img src={c} alt="" />
          <div style={{ color: "white" }} className="hover-div">
            Project #8
          </div>
        </div>
        <div>
          <img src={d} alt="" />
          <div style={{ color: "white" }} className="hover-div">
            Project #7
          </div>
        </div>
        <div>
          <img src={e} alt="" />
          <div style={{ color: "white" }} className="hover-div">
            Project #6
          </div>
        </div>
        <div>
          <img src={f} alt="" />
          <div style={{ color: "white" }} className="hover-div">
            Project #5
          </div>
        </div>
        <div>
          <img src={g} alt="" />
          <div style={{ color: "white" }} className="hover-div">
            Project #4
          </div>
        </div>
        <div>
          <img src={h} alt="" />
          <div style={{ color: "white" }} className="hover-div">
            Project #3
          </div>
        </div>
        <div>
          <img src={i} alt="" />
          <div style={{ color: "white" }} className="hover-div">
            Project #2
          </div>
        </div>
        <div>
          <img src={j} alt="" />
          <div style={{ color: "white" }} className="hover-div">
            Project #1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
