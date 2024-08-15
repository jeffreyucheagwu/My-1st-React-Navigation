import React from "react";
import "./Testimonial.css";
import img from "../../assets/imageSection/Aigars-Silkalns-150x150.jpg";
const Testimonial = () => {
  return (
    <div className="testimonial-background-Section">
      <div className="testimonial-Parent-div">
        <h1 className="wocs-text">What Our Customers Say</h1>
        <p className="wocs-body-text">
          Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus dictum,
          augue tortor dictum ipsum, nec congue arcu lorem in nisl. Duis neque
          lacus, viverra non mauris ac, pharetra rhoncus libero. Aliquam varius
          viverra ex, in venenatis magna ornare sit amet. Integer varius sit
          amet turpis eu ullamcorper.
        </p>
        <div className="client-picture-name">
          <img src={img} alt="" className="client-picture" />
          <div className="client-name-text">Aigars Silkalns</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
