import { useNavigate } from "react-router-dom";
import LogoGooglePLay from "../../../../src/assets/googleplay.png";
import LogoMicrosoft from "../../../../src/assets/microsoft.png";
import BoxAccount from "./BoxAccount";

const InferiorSection = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <section
      className="text-center"
      style={{ minWidth: "35rem", maxHeight: "47rem" }}
    >
      <BoxAccount
        handleSignUpOrLogIn={handleSignUpClick}
        accountState="Don't have an account?"
        state="Sign up"
      />
      <div className="container row mt-3 justify-content-center">
        <p className="text-center">Get the app.</p>
        <img src={LogoGooglePLay} alt="Google Play" className="img" />
        <img src={LogoMicrosoft} alt="Microsoft Store" className="img" />
      </div>
    </section>
  );
};
export default InferiorSection;
