import { useState } from "react";
import PerformanceLanguageIcon from "../../../assets/details/performance_language_v2.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EnglishIcon from "../../../assets/details/English.svg";
import HindiIcon from "../../../assets/details/Hindi.svg";
import Language from "../../../components/language/Language";

const PerformanceLanguage = () => {
  const [expand, setExpand] = useState(false);

  function handleExpand() {
    setExpand(!expand);
  }
  return (
    <>
      <div className="performanceLanguage" onClick={handleExpand}>
        <div className="performanceLanguage__icon">
          <img src={PerformanceLanguageIcon} alt="" />
        </div>
        <div className="performanceDetails__heading">
          <span>Performance Language</span>
        </div>
        <div className="performanceDetails__expand">
          {expand ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}
        </div>
      </div>
      {expand && (
        <div className="performanceLanguageExpansion">
          <div className="performanceLanguageExpansion__container">
            <Language img={EnglishIcon} language="English" />
            <Language img={HindiIcon} language="Hindi" />
          </div>
        </div>
      )}
    </>
  );
};

export default PerformanceLanguage;
