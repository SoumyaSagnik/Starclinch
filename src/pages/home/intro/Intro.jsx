import "./Intro.css";
import ProfilePic from "../../../assets/intro/rk.jpg";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Button from "../../../components/Button/Button";

const Intro = () => {
  return (
    <div className="intro">
      <ContentWrapper>
        <ul className="links">
          <li>Home</li>
          <li>CELEBRITY APPEARANCE</li>
          <li>Ranbir Kapoor</li>
        </ul>
        <div className="intro__content">
          <div className="content__left">
            <img src={ProfilePic} alt="Ranbir Kapoor" />
          </div>
          <div className="content__right">
            <div className="name__section">
              <p className="name__section__name">Ranbir Kapoor</p>
              <p className="name__section__category">(CELEBRITY APPEARANCE)</p>
              <p className="name__section__location">Mumbai, Maharashtra</p>
            </div>
            <Button text="See Price And Book" className="introGenericButton" />
            <div className="description">
              <p>
                The 'ROCKSTAR' who is a heart throb of millions, Ranbir Kapoor
                is one of the finest actors in Bollywood and is a true versatile
                performer
              </p>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Intro;
