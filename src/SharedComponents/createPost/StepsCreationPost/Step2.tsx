// import { IoArrowBack } from "react-icons/io5";

// import TitleCreatePost from "./title";

// import { useState } from "react";

// import { useHandleSharePost } from "../useHandleSharePost";
// import Step3 from "./Step3";
// import { useImgUploadContext } from "../../../useContext/ImgUploadContext/ImgUploadContext";
// import { useUtilitysSteps } from "./useUtilitysSteps";

// type Step2Props = {
//   prevStep: () => void;
// };

// const Step2 = ({ prevStep }: Step2Props) => {
//   const { selectedImg } = useImgUploadContext();
//   // console.log("Imagem recebida no Step2 (selectedImg):", selectedImg);

//   const [showStep3, setShowStep3] = useState(false);
//   const { showStep2, setShowStep2, setShowStep4 } = useUtilitysSteps();
//   const { handleShare } = useHandleSharePost();

//   const handleClick = () => {
//     if (showStep2) {
//       // Do Step 2 para Step 3

//       setShowStep3(true);
//     } else if (showStep3) {
//       // Do Step 3 ao compartilhar
//       setShowStep2(false);
//       setShowStep3(false); // Mantém o Step 3 ativo após compartilhar
//       setShowStep4(true); // Garantir que Step 4 não seja ativado agora
//     }
//   };

//   return (
//     <div
//       style={{
//         height: "100vh", // Ajuste a altura conforme necessário
//       }}
//       className="d-flex flex-column justify-content-center  align-items-center "
//     >
//       <TitleCreatePost
//         Icon={<IoArrowBack className="fs-1" onClick={prevStep} />}
//         Title="Crop"
//         btnRight={showStep3 === true ? "Share" : "Next"}
//         onClick={handleClick}
//       />
//       <div
//         className={`w-100  d-flex  border-dark  border-top `}
//         style={{ height: "80vh", maxWidth: "100rem" }}
//       >
//         {selectedImg && (
//           <div
//             className=" d-flex w-100  overflow-hidden d-flex justify-content-center align-items-center"
//             style={{ height: "75vh" }}
//           >
//             <img
//               src={URL.createObjectURL(selectedImg)}
//               alt="Selected"
//               style={{
//                 maxWidth: "100%",
//                 maxHeight: "100%",
//                 objectFit: "contain",
//               }}
//             />
//           </div>
//         )}
//         {showStep3 && <Step3 />}
//       </div>
//     </div>
//   );
// };

// export default Step2;
import { IoArrowBack } from "react-icons/io5";

import TitleCreatePost from "./title";

import { useState } from "react";

import { useHandleSharePost } from "../useHandleSharePost";
import Step3 from "./Step3";
import { useImgUploadContext } from "../../../useContext/ImgUploadContext/ImgUploadContext";

type Step2Props = {
  prevStep: () => void;
};

const Step2 = ({ prevStep }: Step2Props) => {
  const { selectedImg } = useImgUploadContext();
  // console.log("Imagem recebida no Step2 (selectedImg):", selectedImg);

  const [showStep3, setShowStep3] = useState(false);

  const { handleShare } = useHandleSharePost();

  // const handleNextClick = () => {
  //   setShowStep3(true);
  // };

  return (
    <div
      style={{
        height: "100vh", // Ajuste a altura conforme necessário
      }}
      className="d-flex flex-column justify-content-center  align-items-center "
    >
      <TitleCreatePost
        Icon={<IoArrowBack className="fs-1" onClick={prevStep} />}
        Title="Crop"
        btnRight={showStep3 === true ? "Share" : "Next"}
        onClick={showStep3 ? () => handleShare() : () => setShowStep3(true)}
      />
      <div
        className={`w-100  d-flex  border-dark  border-top `}
        style={{ height: "80vh", maxWidth: "100rem" }}
      >
        {selectedImg && (
          <div
            className=" d-flex w-100  overflow-hidden d-flex justify-content-center align-items-center"
            style={{ height: "75vh" }}
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
        {showStep3 && <Step3 />}
      </div>
    </div>
  );
};

export default Step2;
