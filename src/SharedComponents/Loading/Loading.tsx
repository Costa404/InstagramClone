import intagramLogo from "../../assets/Instagram-Logo.wine.png";
import metaLogo from "../../assets/metaLogo.png";

const LoadingSpinner = () => {
  return (
    <div
      className="d-flex justify-content-center flex-column align-items-md-center w-100 h-100"
      style={{ minHeight: "100vh" }}
    >
      <div className="d-flex align-items-end" style={{ minHeight: "50vh" }}>
        {" "}
        <img src={intagramLogo} style={{ width: "20rem" }} alt="" />
      </div>
      <div
        className="d-flex  flex-column  justify-content-end align-items-center"
        style={{ minHeight: "48vh" }}
      >
        <p className="fs-3 m-0 text-dark">from</p>
        <img src={metaLogo} style={{ width: "15rem" }} alt="" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
