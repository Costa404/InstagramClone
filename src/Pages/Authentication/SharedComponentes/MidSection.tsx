import { useTheme } from "../../../useContext/ThemeContext/ThemeContext";

const MidSection = () => {
  const { theme } = useTheme();
  return (
    <section>
      <form>
        <div
          className="d-flex align-items-center"
          style={{ padding: "1rem 0" }}
        >
          <hr className="flex-grow-1" />
          <span className="max-2 p-4">OR</span>
          <hr className="flex-grow-1" />
        </div>

        <div className="container pb-3 d-flex justify-content-center align-items-center ">
          <a className="text-center fs-3 d-flex hover align-items-center justify-content-center ">
            <i className="bi bi-facebook me-2 fs-3 text-primary"></i>
            <h3 className="fs-4 text-primary h-100 d-flex mt-1">
              {" "}
              Log in with Facebook
            </h3>
          </a>
        </div>
      </form>

      <div className="d-flex justify-content-center">
        <a className="fw-bolder hover fs-5">Forgotten your password?</a>
      </div>

      <span className="container">
        <p className="text-center text-secondary">
          You can also{" "}
          <a
            href=""
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } underline`}
          >
            report content you believe is unlawful
          </a>{" "}
          in your country without logging in.
        </p>
      </span>
    </section>
  );
};

export default MidSection;
