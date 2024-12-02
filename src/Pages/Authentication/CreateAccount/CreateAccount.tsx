import { useNavigate } from "react-router-dom";
import LogoGooglePLay from "../../../../src/assets/googleplay.png";
import LogoMicrosoft from "../../../../src/assets/microsoft.png";
import BoxAccount from "../SharedComponentes/BoxAccount";
import Footer from "../SharedComponentes/Footer";
import AuthProviders from "./Signup/Frontend/AuthProviders";
import SignupForm from "./Signup/Frontend/SignupForm";

const CreateAccount: React.FC = () => {
  const navigate = useNavigate();

  const handleLognInClick = () => {
    navigate("/");
  };

  return (
    <section className="container-fluid d-flex justify-content-center align-items-center flex-column min-vh-100">
      <div
        className="border border-dark mt-5 p-5 d-flex justify-content-center"
        style={{ minHeight: "71.3rem", maxWidth: "35rem" }}
      >
        <div className="row d-flex justify-content-center text-center">
          <AuthProviders />
          <SignupForm />
        </div>
      </div>

      <div style={{ maxWidth: "35rem" }}>
        <BoxAccount
          handleSignUpOrLogIn={handleLognInClick}
          accountState="Have an account?"
          state="Log in"
        />
      </div>

      <div className="container row mt-3 justify-content-center">
        <p className="text-center">Get the app.</p>
        <img src={LogoGooglePLay} alt="Google Play" className="img" />
        <img src={LogoMicrosoft} alt="Microsoft Store" className="img" />
      </div>

      <Footer />
    </section>
  );
};

export default CreateAccount;
