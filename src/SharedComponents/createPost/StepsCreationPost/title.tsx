import React from "react";

type TitleProps = {
  Title: string;
  btnRight?: string;
  Icon?: React.ReactNode;
  onClick?: () => void;
};

const TitleCreatePost = ({ Title, btnRight, Icon, onClick }: TitleProps) => {
  return (
    <div className="d-flex justify-content-between w-100  ">
      <span className="px-3">{Icon}</span>
      <h1 className="fs-3">{Title}</h1>

      <button onClick={onClick} className="btn fs-3 text-primary px-4 ">
        {btnRight}
      </button>
    </div>
  );
};

export default TitleCreatePost;
