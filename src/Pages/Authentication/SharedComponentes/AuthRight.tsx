import { useTheme } from "../../../useContext/ThemeContext/ThemeContext";
import InstagramTittleWhite from "../../../../src/assets/Captura de ecrã 2024-10-21 123045.png";
import InstagramTittleBlack from "../../../../src/assets/black-title.png";
import LoginForm from "../Login/LoginForm";

import InferiorSection from "./InferiorSection";
import MidSection from "./MidSection";

const AuthRight = () => {
  const { theme } = useTheme();
  return (
    <section>
      <div
        className="container mt-5 border p-5 border-dark  text-center"
        style={{ minWidth: "35rem", maxHeight: "47rem" }}
      >
        {theme === "dark" ? (
          <img
            className="text-center pb-5 fs-1"
            src={InstagramTittleBlack}
            alt=""
            style={{ minWidth: "18.2rem" }}
          />
        ) : (
          <img
            className="text-center pb-5 fs-1"
            src={InstagramTittleWhite}
            alt=""
          />
        )}
        <div className="text-center">
          <LoginForm />
          <MidSection />
        </div>
      </div>
      <InferiorSection />
    </section>
  );
};

export default AuthRight;
