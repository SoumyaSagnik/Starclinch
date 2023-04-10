import { useState } from "react";
import ReviewIcon from "../../../assets/details/review_icon.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StarIcon from "@mui/icons-material/Star";

const Review = ({ count }) => {
  const [expand, setExpand] = useState(false);

  function handleExpand() {
    setExpand(!expand);
  }
  return (
    <>
      <div className="review" onClick={handleExpand}>
        <div className="review__icon">
          <img src={ReviewIcon} alt="" />
        </div>
        <div className="review__heading">
          <span>Review</span>
        </div>
        <div className="review__expand">
          {expand ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}
        </div>
      </div>
      {expand && (
        <div className="reviewExpansion">
          <p className="reviewCount">{count} reviews</p>
          <p className="reviewHeader">Post a review</p>
          <div className="reviewStars">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <textarea
            name="review"
            id="review"
            placeholder="Review"
            spellCheck={false}
            className="reviewWriting"
          ></textarea>
          <div className="review__submit">
            <button>POST</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Review;
