import "./Header.css";
import Logo from "../../assets/header/logo.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import Hamburger from "../../assets/header/hamburger.svg";
import Cart from "../../assets/header/cart.svg";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  function navigateHomePage() {
    navigate("/");
  }
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <img src={Logo} alt="StarClinch" onClick={navigateHomePage} />
        </div>
        <div className="header__right">
          <span>
            <p>Entertainers</p> <ExpandMoreIcon className="expandIcon" />
          </span>
          <span>
            <p>Join Community</p> <ExpandMoreIcon className="expandIcon" />
          </span>
          <span>
            <Button
              text="Post Your Requirement"
              className="headerGenericButton"
            />
          </span>
          <span id="search">
            <SearchIcon />
          </span>
          <span id="cart">
            <img src={Cart} alt="cart" />
          </span>
          <img src={Hamburger} alt="" id="hamburger" />
        </div>
      </div>
    </header>
  );
};

export default Header;
