import React from "react";

type TitleProps = {
  title: string;
  btnRight?: string | null;
  Icon?: React.ReactNode;
  onClick?: () => void;
  showStep4?: boolean;
};

const TitleCreatePost = ({
  title,
  btnRight,
  Icon,
  onClick,
  showStep4,
}: TitleProps) => {
  console.log("showStep4", showStep4);
  return (
    <div
      className="d-flex w-100  "
      style={{
        justifyContent: showStep4 ? "center" : "space-between",
      }}
    >
      {showStep4 ? null : <span className="px-3">{Icon}</span>}
      <h1 className="fs-3">{title}</h1>
      {showStep4 ? null : (
        <button onClick={onClick} className="btn fs-3 text-primary px-4">
          {btnRight}
        </button>
      )}
    </div>
  );
};

export default TitleCreatePost;
