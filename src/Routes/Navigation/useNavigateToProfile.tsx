import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../useContext/currentUserContext/currentUserContext";

// Hook para navegar para o perfil de um usuário
export const useNavigateToProfile = () => {
  const navigate = useNavigate(); // Hook de navegação do react-router-dom
  const { currentUserId } = useCurrentUser();
  // Função que vai realizar a navegação para a página do perfil do usuário
  return () => {
    navigate(`/profile/${currentUserId?.userName}`); // Navega para a URL do perfil do usuário usando o username
  };
};
