// import { FaRegImages } from "react-icons/fa";

// import { CiStreamOn } from "react-icons/ci";
// import { useToggleCreatePostClick } from "./useToggleCreatePostClick"; // Hook de controle
// import CreatePost from "../CreatePost"; // Componente de criação de post
// import { useTheme } from "../../../useContext/ThemeContext/ThemeContext";

// const CreatePostToggle = () => {
//   const { theme } = useTheme();
//   const { toggleVisibilityMainDiv, visibilityMainDiv } =
//     useToggleCreatePostClick(); // Controla a visibilidade do post

//   return (
//     <div className="position-relative">
//       <div
//         className="position-absolute p-3 my-2 rounded-4 mb-5"
//         style={{
//           width: "20rem",
//           height: "8.8rem",
//           zIndex: "1000",
//           bottom: "200%",
//           backgroundColor: theme === "dark" ? "#262626" : "#f2f2f2",
//         }}
//       >
//         <div className="d-flex flex-column h-100">
//           {/* Botão para criar um post */}
//           <div
//             onClick={toggleVisibilityMainDiv} // Altera o estado de visibilidade do CreatePost
//             className="d-flex justify-content-between align-items-center h-50 hover"
//           >
//             {/* Renderiza o CreatePost apenas se visibilityMainDiv for verdadeiro */}
//             {visibilityMainDiv && <CreatePost />}
//             <h1 className="fs-4 fw-semibold">Post </h1>
//             <FaRegImages className="fs-1" />
//           </div>

//           {/* Opção para vídeo ao vivo */}
//           <div className="d-flex justify-content-between align-items-center h-50 hover">
//             <h1 className="fs-4 fw-semibold">Live video </h1>
//             <CiStreamOn className="fs-1" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePostToggle;
