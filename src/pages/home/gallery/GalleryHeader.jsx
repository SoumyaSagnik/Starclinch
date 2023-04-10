import React from "react";

const GalleryHeader = ({ img }) => {
  return (
    <div className="galleryHHeader">
      <div className="heading">
        <img src={img} alt="" />
        <span>Gallery</span>
      </div>
    </div>
  );
};

export default GalleryHeader;
