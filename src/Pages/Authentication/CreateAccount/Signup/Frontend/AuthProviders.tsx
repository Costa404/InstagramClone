import InstagramTittleWhite from "../../../../../assets/Captura de ecrã 2024-10-21 123045.png";
import InstagramTittleBlack from "../../../../../assets/black-title.png";
import { useTheme } from "../../../../../useContext/ThemeContext/ThemeContext";

const AuthProviders = () => {
  const { theme } = useTheme();
  return (
    <div style={{ minHeight: "3.8rem" }}>
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
      <h1 className="text-secondary fs-5 lh-5 fw">
        Sign up to see photos and videos from your friends.
      </h1>
      <button className="rounded-3 btn btn-primary w-100   mb-4 mt-4 d-flex justify-content-center align-items-center">
        <a href="" className="bi bi-facebook text-white mb-3 fs-5 m-2"></a>{" "}
        <h3 className="fs-4"> Log in with Facebook</h3>
      </button>

      <div className="d-flex align-items-center mb-4 ">
        <hr className="flex-grow-1" />
        <span className="max-2 p-2 ">OR</span>
        <hr className="flex-grow-1" />
      </div>
    </div>
  );
};

export default AuthProviders;
