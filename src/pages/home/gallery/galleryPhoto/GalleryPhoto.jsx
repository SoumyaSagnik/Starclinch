import "./GalleryPhoto.css";

const GalleryPhoto = ({ img }) => {
  return (
    <div className="galleryPhoto">
      <img src={img} alt="" />
    </div>
  );
};

export default GalleryPhoto;
