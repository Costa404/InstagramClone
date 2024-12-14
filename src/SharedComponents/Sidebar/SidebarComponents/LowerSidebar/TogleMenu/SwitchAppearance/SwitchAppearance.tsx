import { FaChevronLeft } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../../../../../useContext/ThemeContext/ThemeContext";

type SwitchAppearanceProps = {
  closeMainDiv: () => void;
};

const SwitchAppearance: React.FC<SwitchAppearanceProps> = ({
  closeMainDiv,
}) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <div
      className="position-absolute p-3 my-5 rounded-4 d-flex  flex-column"
      style={{
        width: "22.6rem",
        height: "11.9rem",
        zIndex: "1000",
        bottom: "100%",
        backgroundColor: theme === "dark" ? "#1a1a1a" : "#f2f2f2",
      }}
    >
      <div className="d-flex justify-content-between  p-1 gap-3 border-bottom border-dark">
        {" "}
        <FaChevronLeft className="fs-3" onClick={closeMainDiv} />
        <h1 className="fs-4">Switch appearance</h1>
        <MdOutlineLightMode className="fs-3" />
      </div>
      <div className="d-flex  justify-content-between mt-5">
        <p> Dark mode</p>
        <div className="form-check form-switch">
          {" "}
          <input
            onChange={toggleTheme} // Use onChange em vez de onClick
            checked={theme === "dark"}
            type="checkbox"
            className="form-check-input "
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchAppearance;
