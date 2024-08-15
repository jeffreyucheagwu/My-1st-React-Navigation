import React from "react";
import "./SeoFriendly.css";
import image from "../../assets/images/macbook-preview-flexible.png";

const SeoFriendly = () => {
  return (
    <div className="section-div">
      <div className="container-parent-div">
        <div className="container-1">
          <img src={image} className="img-div" />
        </div>
        <div className="container-2">
          <div className="seo">SEO Friendly</div>
          <div className="p-tag">
            <p className="span">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pulvinar luctus sem, eget porta orci. Maecenas molestie dui id
              diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae
              ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus
              ac ligula id ultricies.
            </p>
          </div>
          <div className="readmore">
            <button className="read-text">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoFriendly;
