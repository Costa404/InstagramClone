import instagramTest from "../../assets/bg--homepage.png";

import AuthRight from "./SharedComponentes/AuthRight";
import Footer from "./SharedComponentes/Footer";

const Authentication = () => {
  return (
    <div className="container vh-100 d-flex flex-column  justify-content-center align-items-center mt-5">
      <div className="d-flex justify-content-center" style={{ gap: "2.5rem" }}>
        <div className="h-100 imgAuthLogin">
          <img
            className="mt-5 "
            style={{ minHeight: "50rem", maxWidth: "100%" }} // Ajusta a largura da imagem
            src={instagramTest}
            alt="Instagram Test"
          />
        </div>
        <div
          className="d-flex flex-column justify-content-center"
          style={{ maxWidth: "35rem" }}
        >
          <div className="col-4" style={{ minHeight: "38rem" }}>
            {" "}
            <AuthRight />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Authentication;
