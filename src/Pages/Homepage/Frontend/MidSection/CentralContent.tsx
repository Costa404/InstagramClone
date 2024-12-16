import UpperContent from "./UpperContent/UpperContent";

import RightContent from "../RightContent/RightContent";

import Feed from "./Feed/Feed";

const CentralContent = () => {
  return (
    <div
      className=" d-flex justify-content-center w-100 position-relative marginLeftZero650 "
      style={{
        overflowY: "auto",
        flex: "1",
        marginLeft: "15%",
        minWidth: "158.5rem",
        gap: "15rem",
        flexShrink: "0",
      }}
    >
      <div className="col-4 d-flex flex-column align-items-center  test ">
        <UpperContent />
        <Feed />
      </div>
      <RightContent />
    </div>
  );
};

export default CentralContent;
