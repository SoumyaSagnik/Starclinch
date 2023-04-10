import "./Button.css";
import { useNavigate } from "react-router-dom";

const Button = ({ text, className }) => {
  const navigate = useNavigate();

  function handleClick() {
    if (text === "See Price And Book") navigate("/cart/checkout");
  }
  return (
    <button
      className={`genericButton ${className && className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
