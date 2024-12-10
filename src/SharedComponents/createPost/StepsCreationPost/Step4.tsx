type Step4Props = {
  isSharing: boolean;
};

const Step4 = ({ isSharing }: Step4Props) => {
  console.log("isSharing", isSharing);
  return (
    <>
      {isSharing ? null : (
        <div
          className="w-100 d-flex justify-content-center align-items-center fs-1"
          style={{ background: "rgb(38, 38, 38)" }}
        >
          Your post has been shared.
        </div>
      )}
    </>
  );
};

export default Step4;
