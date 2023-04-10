import "./PerformanceMatrix.css";

const PerformanceMatrix = ({ img, matrix, name, color, background }) => {
  return (
    <div
      className="performanceMatrix"
      style={{ color: color, backgroundColor: background }}
    >
      <img src={img} alt="" />
      <span className="performanceMatrix__matrix">{matrix}</span>
      <span className="performanceMatrix__name">{name}</span>
    </div>
  );
};

export default PerformanceMatrix;
