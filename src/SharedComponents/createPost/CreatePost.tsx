import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Step1 from "./StepsCreationPost/Step1";
import Step2 from "./StepsCreationPost/Step2";

import { useUtilitysSteps } from "./StepsCreationPost/useUtilitysSteps";
import { useImgUploadContext } from "../../useContext/ImgUploadContext/ImgUploadContext";

const CreatePost = () => {
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { setSelectedImg } = useImgUploadContext();

  const { showStep2 } = useUtilitysSteps();

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-100  position-fixed">
      {" "}
      <div
        className={` createPostId rounded-2 d-flex flex-column ${
          isModalOpen ? "" : "d-none"
        }`}
        style={{
          zIndex: "99",
          overflow: "hidden",
          minHeight: "100vh",
          background: "transparent",
        }}
      >
        <div
          className="d-flex justify-content-end w-100 "
          style={{ height: "auto" }}
        >
          <IoMdClose className="fs-1" onClick={closeModal} />
        </div>
        <div
          className="d-flex justify-content-center    "
          style={{ minHeight: "100vh" }}
        >
          {step === 1 && (
            <Step1 nextStep={nextStep} setSelectedImg={setSelectedImg} />
          )}

          {step === 2 && (
            <div style={{ display: showStep2 ? "block" : "none" }}>
              <Step2 prevStep={prevStep} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
