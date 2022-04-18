import React from "react";
import "./Gallery.css";

import image1 from "../../../images/gallery (1).jpg";
import image2 from "../../../images/gallery (2).jpg";
import image3 from "../../../images/gallery (3).jpg";
import image4 from "../../../images/gallery (4).jpg";
import image5 from "../../../images/gallery (5).jpg";
import image6 from "../../../images/gallery (6).jpg";
import image7 from "../../../images/gallery (7).jpg";
import image8 from "../../../images/gallery (8).jpg";
import image9 from "../../../images/gallery (9).jpg";
import image10 from "../../../images/gallery (10).jpg";
import image11 from "../../../images/gallery (11).jpg";
import image12 from "../../../images/gallery (12).jpg";

const Gallery = () => {
  return (
    <div>
      <h2 className="p-3 my-3">My Gallery</h2>

      <div className="container bg-dark photos">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
        <img src={image7} alt="" />
        <img src={image8} alt="" />
        <img src={image9} alt="" />
        <img src={image10} alt="" />
        <img src={image11} alt="" />
        <img src={image12} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
