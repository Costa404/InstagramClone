import { IoArrowBack } from "react-icons/io5";

import { useEffect, useState } from "react";

import { useHandleSharePost } from "../useHandleSharePost";
import Step3 from "./Step3";
import { useImgUploadContext } from "../../../useContext/ImgUploadContext/ImgUploadContext";
import Step4 from "./Step4";
import { useUtilitysSteps } from "./useUtilitysSteps";
import TitleCreatePost from "./TitleCreatePost";

type Step2Props = {
  prevStep: () => void;
};

const Step2 = ({ prevStep }: Step2Props) => {
  const { selectedImg } = useImgUploadContext();
  // console.log("Imagem recebida no Step2 (selectedImg):", selectedImg);

  const { handleShare } = useHandleSharePost();
  const {
    isSharing,
    setIsSharing,
    showStep3,
    setShowStep3,
    setShowStep4,
    showStep4,
  } = useUtilitysSteps();

  // const handleNextClick = () => {
  //   setShowStep3(true);
  // };

  // useEffect(() => {
  //   console.log("showStep4 mudou:", showStep4);
  // }, [showStep4]);

  const [title, setTitle] = useState("Crop");

  useEffect(() => {
    if (showStep4) {
      if (isSharing) {
        setTitle("Sharing");
      } else {
        setTitle("Post Shared");
      }
    } else if (showStep3) {
      setTitle("Create New Post");
    } else {
      setTitle("Crop");
    }
  }, [isSharing, showStep3, showStep4]);

  const test = async () => {
    try {
      setIsSharing(true);
      setShowStep3(false);
      setShowStep4(true);
      await handleShare();
      console.log("Compartilhado!");
    } catch (error) {
      console.error("Erro ao compartilhar:", error);
    } finally {
      setIsSharing(false); // Finaliza o estado de execução
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        minWidth: "50vw", // Ajuste a altura conforme necessário
      }}
      className="d-flex flex-column justify-content-center  align-items-center "
    >
      <TitleCreatePost
        Icon={<IoArrowBack className="fs-1" onClick={prevStep} />}
        title={title}
        btnRight={showStep4 ? null : showStep3 ? "Share" : "Next"}
        onClick={showStep3 ? () => test() : () => setShowStep3(true)}
        showStep4={showStep4}
      />

      <div
        className="w-100  d-flex   border-dark  border-top  "
        style={{
          height: "80vh",
          maxWidth: "100rem",
        }}
      >
        {selectedImg && (
          <>
            {showStep4 ? null : (
              <div
                className="d-flex w-100 overflow-hidden justify-content-center align-items-center"
                style={{
                  height: "75vh",
                }}
              >
                <img
                  src={URL.createObjectURL(selectedImg)}
                  alt="Selected"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            )}
          </>
        )}

        {showStep3 && <Step3 />}
        {showStep4 && <Step4 isSharing={isSharing} />}
      </div>
      {isSharing && (
        <p
          className="bg-primary position-fixed fs-1"
          style={{ background: "rgb(38, 38, 38)" }}
        >
          Sharing...
        </p>
      )}
    </div>
  );
};

export default Step2;
