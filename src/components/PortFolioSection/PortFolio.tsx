import React from "react";
import image from "../../assets/images/flexible-portfolio.png";
import "./PortFolio.css";
const PortFolio = () => {
  return (
    <div className="portfolio-section-div">
      <div className="portfolio-container-parent-div">
        <div className="container-a">
          <div className="text-portfolio">Portfolio Section</div>
          <div className="p-tag2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pulvinar luctus sem, eget porta orci. Maecenas molestie dui id
              diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae
              ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus
              ac ligula id ultricies.
            </p>
          </div>
          <div className="readmore">
            <button className="read-text">SEE IT IN ACTION</button>
          </div>
        </div>
        <div className="container-b">
          <img src={image} className="img-" />
        </div>
      </div>
    </div>
    // <div className="portfolio-section-div">
    //   <div className="portfolio-container-parent-div">
    //     <div className="container-a">
    //       <div className="text-portfolio">Portfolio Section</div>
    //       <div className="p-tag2">
    //         <p>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
    //           pulvinar luctus sem, eget porta orci. Maecenas molestie dui id
    //           diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae
    //           ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus
    //           ac ligula id ultricies.
    //         </p>
    //       </div>
    //       <div className="readmore">
    //         <button className="read-text">SEE IT IN ACTION</button>
    //       </div>
    //     </div>
    //     <div className="container-b">
    //       <img src={image} className="img-" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default PortFolio;
