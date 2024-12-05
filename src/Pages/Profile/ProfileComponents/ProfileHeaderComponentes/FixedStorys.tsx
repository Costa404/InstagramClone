import { GoPlus } from "react-icons/go";

const FixedStorys = () => {
  return (
    <div className="d-flex gap-5 px-5">
      <div
        className="rounded-circle border border-dark justify-content-center align-items-center d-flex hover
         "
        style={{ width: "7.7rem", height: "7.7rem", objectFit: "cover" }}
      >
        <GoPlus className="fs-1" />
      </div>
    </div>
  );
};

export default FixedStorys;
