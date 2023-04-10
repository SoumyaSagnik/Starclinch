import "./Details.css";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Biography from "./Biography";
import PerformanceDetails from "./PerformanceDetails";
import PerformanceLanguage from "./PerformanceLanguage";
import Review from "./Review";

const Details = () => {
  return (
    <div className="details">
      <ContentWrapper>
        <div className="detailsContainer">
          <Biography />
          <PerformanceDetails />
          <PerformanceLanguage />
          <Review count={0} />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Details;
