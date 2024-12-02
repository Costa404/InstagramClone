import ProfileTemporary from "../../../../assets/me.jpg";

const FixedStorys = () => {
  return (
    <div className="d-flex gap-5 px-5">
      <img
        className="rounded-circle border border-dark"
        src={ProfileTemporary}
        style={{ width: "7.7rem", height: "7.7rem", objectFit: "cover" }}
        alt=""
      />
      <img
        className="rounded-circle border border-dark"
        src={ProfileTemporary}
        style={{ width: "7.7rem", height: "7.7rem", objectFit: "cover" }}
        alt=""
      />
    </div>
  );
};

export default FixedStorys;
