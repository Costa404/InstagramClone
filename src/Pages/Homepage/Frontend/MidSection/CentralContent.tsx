import UpperContent from "./UpperContent/UpperContent";

import RightContent from "../RightContent/RightContent";

import Feed from "./Feed/Feed";

const CentralContent = () => {
  return (
    <div
      className=" d-flex justify-content-center w-100 position-relative "
      style={{
        overflowY: "auto",
        flex: "1",
        marginLeft: "31.9rem",
        minWidth: "158.5rem",
        gap: "15rem",
        flexShrink: "0",
        zIndex: "1",
      }}
    >
      <div className="col-4 d-flex flex-column align-items-center">
        <UpperContent />
        <Feed />
      </div>
      <RightContent />
    </div>
  );
};

export default CentralContent;
