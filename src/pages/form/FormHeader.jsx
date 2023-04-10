import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Button from "../../components/Button/Button";

const FormHeader = ({ img, firstName, lastName }) => {
  return (
    <div className="formHeader">
      <ContentWrapper>
        <div className="formHeader__container">
          <div className="formHeader__profile">
            <img src={img} alt="" />
            <div className="profile__name">
              <p>{firstName}</p>
              <p>{lastName}</p>
            </div>
          </div>
          <div className="formSubmit">
            <Button text="Show Best Price" className="formSubmit__button" />
          </div>
        </div>
        <div className="formHeader__subheader">
          <h1>Submit Form</h1>
          <h3>Get Best Price</h3>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default FormHeader;
