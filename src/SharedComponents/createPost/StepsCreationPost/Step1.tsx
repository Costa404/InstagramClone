import React from "react";
import { GoFileMedia } from "react-icons/go";
import Title from "./title";
import { useTheme } from "../../../useContext/ThemeContext/ThemeContext";

type Step1Props = {
  nextStep: () => void;
  setSelectedImg: (file: File | null) => void;
};

const Step1: React.FC<Step1Props> = ({ nextStep, setSelectedImg }) => {
  const { theme } = useTheme();
  const handleChangeAndNext = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("Arquivo selecionado no Step1:", file);

    if (file) {
      setSelectedImg(file);
      nextStep();
    }
  };

  return (
    <div
      className="w-100 h-100 d-flex justify-content-center align-items-center flex-column  "
      style={{ minHeight: "100vh" }}
    >
      <Title Title="Create new post" />
      <div
        style={{
          background: theme === "dark" ? "#262626" : "white",
          marginBottom: "5rem",
          height: "80vh",
          width: "40%",
        }}
        className=" d-flex flex-column justify-content-center gap-5 align-items-center "
      >
        <GoFileMedia
          className="fs-1"
          style={{ width: "7rem", height: "7rem" }}
        />
        <h1 className="fs-2">Drag photos and videos here</h1>

        <label
          htmlFor="media-input"
          className="btn btn-primary p-3 fs-4 rounded-3 fw-bolder"
        >
          Select from this computer
          <input
            id="media-input"
            type="file"
            accept="image/*,video/*"
            onChange={handleChangeAndNext}
            multiple={false}
            style={{ display: "none" }}
          />
        </label>
      </div>
    </div>
  );
};

export default Step1;
