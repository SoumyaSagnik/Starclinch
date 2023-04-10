import "./Gallery.css";
import GalleryHeader from "./GalleryHeader";
import GalleryBody from "./GalleryBody";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import GalleryIcon from "../../../assets/gallery/gallery_icon.svg";

const Gallery = () => {
  return (
    <div className="gallery">
      <ContentWrapper>
        <GalleryHeader img={GalleryIcon} />
        <GalleryBody />
      </ContentWrapper>
    </div>
  );
};

export default Gallery;
