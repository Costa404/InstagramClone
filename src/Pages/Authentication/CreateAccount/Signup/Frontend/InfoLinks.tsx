import { useTheme } from "../../../../../useContext/ThemeContext/ThemeContext";

const InfoLinks = () => {
  const { theme } = useTheme();
  return (
    <div>
      <p style={{ color: "#a8a8a8" }}>
        People who use our service may have uploaded your contact information to
        Instagram.{" "}
        <a
          href="#"
          style={{
            color: theme === "dark" ? "white" : "black",
          }}
        >
          Learn more
        </a>
      </p>
      <p style={{ color: "#a8a8a8" }}>
        By signing up, you agree to our <a href="#">Terms</a>. Learn how we
        collect, use and share your data in our{" "}
        <a
          style={{
            color: theme === "dark" ? "white" : "black",
          }}
          href="#"
        >
          Privacy Policy
        </a>{" "}
        and how we use cookies and similar technology in our{" "}
        <a
          href="#"
          style={{
            color: theme === "dark" ? "white" : "black",
          }}
        >
          Cookies Policy.
        </a>
      </p>
    </div>
  );
};

export default InfoLinks;
