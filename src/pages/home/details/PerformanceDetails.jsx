import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PerformanceDetailsIcon from "../../../assets/details/Performance_Details.svg";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import OffStageIcon from "../../../assets/details/offstage_members_new.svg";
import PerformingIcon from "../../../assets/details/performing_members_new.svg";
import DurationIcon from "../../../assets/details/performance_min_duration_new.svg";
import TravelIcon from "../../../assets/details/can_travel_new.svg";

import PerformanceMatrix from "../../../components/performanceMatrix/PerformanceMatrix";

const PerformanceDetails = () => {
  const [expand, setExpand] = useState(false);

  function handleExpand() {
    setExpand(!expand);
  }
  return (
    <>
      <div className="performanceDetails" onClick={handleExpand}>
        <div className="performanceDetails__icon">
          <img src={PerformanceDetailsIcon} alt="" />
        </div>
        <div className="performanceDetails__heading">
          <span>Performance Details</span>
        </div>
        <div className="performanceDetails__expand">
          {expand ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}
        </div>
      </div>
      {expand && (
        <div className="performanceDetailsExpansion">
          <div className="performanceDetailsExpansion__container">
            <PerformanceMatrix
              img={OffStageIcon}
              matrix={4}
              name="Off Stage Members"
              color="#6BD5E4"
              background="#E3F8FA"
            />
            <PerformanceMatrix
              img={PerformingIcon}
              matrix={1}
              name="Performing Members"
              color="#FF6B8A"
              background="#FFE6E2"
            />
            <PerformanceMatrix
              img={DurationIcon}
              matrix={`60 - 120 Min`}
              name="Performing Duration"
              color="#C472F9"
              background="#F5E6FE"
            />
            <PerformanceMatrix
              img={TravelIcon}
              matrix={`Can Travel`}
              name="Nationwide"
              color="#FFC66A"
              background="#FFF1C0"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PerformanceDetails;
