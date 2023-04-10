import "./Language.css";

const Language = ({ img, language }) => {
  return (
    <div className="language">
      <img src={img} alt="" />
      <span>{language}</span>
    </div>
  );
};

export default Language;
