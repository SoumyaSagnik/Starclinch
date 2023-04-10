import Img1 from "../../../assets/gallery/1.jpg";
import Img2 from "../../../assets/gallery/2.webp";
import Img3 from "../../../assets/gallery/3.webp";
import Img4 from "../../../assets/gallery/4.webp";
import Img5 from "../../../assets/gallery/5.webp";
import Img6 from "../../../assets/gallery/6.webp";
import Img7 from "../../../assets/gallery/7.webp";
import Img8 from "../../../assets/gallery/8.webp";
import Img9 from "../../../assets/gallery/9.webp";
import Img10 from "../../../assets/gallery/10.webp";
import Img11 from "../../../assets/gallery/11.webp";
import Img12 from "../../../assets/gallery/12.webp";
import Img13 from "../../../assets/gallery/13.webp";
import Img14 from "../../../assets/gallery/14.webp";
import Img15 from "../../../assets/gallery/15.webp";
import Img16 from "../../../assets/gallery/16.webp";
import Img17 from "../../../assets/gallery/17.webp";
import Img18 from "../../../assets/gallery/18.webp";
import Img19 from "../../../assets/gallery/19.webp";
import Img20 from "../../../assets/gallery/20.webp";

import GalleryPhoto from "./galleryPhoto/GalleryPhoto";

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
];

const GalleryBody = () => {
  return (
    <div className="galleryBody">
      <div className="gallery__column">
        <GalleryPhoto img={Img1} />
        <GalleryPhoto img={Img2} />
        <GalleryPhoto img={Img3} />
        <GalleryPhoto img={Img4} />
        <GalleryPhoto img={Img5} />
      </div>
      <div className="gallery__column">
        <GalleryPhoto img={Img6} />
        <GalleryPhoto img={Img7} />
        <GalleryPhoto img={Img8} />
        <GalleryPhoto img={Img9} />
        <GalleryPhoto img={Img10} />
      </div>
      <div className="gallery__column">
        <GalleryPhoto img={Img11} />
        <GalleryPhoto img={Img12} />
        <GalleryPhoto img={Img13} />
        <GalleryPhoto img={Img14} />
        <GalleryPhoto img={Img15} />
      </div>
      <div className="gallery__column">
        <GalleryPhoto img={Img16} />
        <GalleryPhoto img={Img17} />
        <GalleryPhoto img={Img18} />
        <GalleryPhoto img={Img19} />
        <GalleryPhoto img={Img20} />
      </div>
    </div>
  );
};

export default GalleryBody;
