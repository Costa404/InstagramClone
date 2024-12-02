// const styles = {
//   spinnerContainer: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//   },
//   spinner: {
//     width: "40px",
//     height: "40px",
//     border: "4px solid #ccc",
//     borderTopColor: "#007bff",
//     borderRadius: "50%",
//     animation: "spin 1s linear infinite",
//   },
//   text: {
//     marginTop: "10px",
//     fontSize: "14px",
//     color: "#555",
//   },
// };

// const LoadingSpinner = () => {
//   return (
//     <div style={styles.spinnerContainer}>
//       <div style={styles.spinner}></div>
//       <p style={styles.text}>Carregando...</p>
//     </div>
//   );
// };
// // Adiciona a animação global diretamente ao estilo do componente
// const spinAnimation = `
// @keyframes spin {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
// `;

// // Cria uma tag <style> no HTML para adicionar a animação
// const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.appendChild(document.createTextNode(spinAnimation));
// document.head.appendChild(styleSheet);

// export default LoadingSpinner;

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
