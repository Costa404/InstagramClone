// import { useSignupProvider } from "../../../useContext/useSignupContext/useSignupCredentialsContext";
// import InputField from "../CreateAccount/Signup/Frontend/inputField";
// import Button from "../SharedComponentes/ButtonAuth";
// import useLogin from "./useLogin";

// const Login = () => {
//   const { handleLogin } = useLogin();
//   const { emailSignup, setEmailSignup, passwordSignup, setPasswordSignup } =
//     useSignupProvider();

//   const handleSubmit = async (
//     e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
//   ) => {
//     // Handle the click event

//     e.preventDefault(); // Previne o comportamento padrão do formulário

//     try {
//       // Chame a função handleLogin (se for uma operação assíncrona, use await)
//       await handleLogin(e); // Se handleLogin for uma função assíncrona
//     } catch (error) {
//       // Lida com erros que podem ocorrer durante o processo
//       console.error("Ocorreu um erro:", error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <InputField
//           type="email"
//           id="email"
//           value={emailSignup}
//           onChange={(e) => setEmailSignup(e.target.value)}
//           placeholder="Email"
//           label="Email"
//         />
//         <InputField
//           type="password"
//           id="password"
//           value={passwordSignup}
//           onChange={(e) => setPasswordSignup(e.target.value)}
//           placeholder="Password"
//           label="Password"
//         />
//         <Button label="Logddddddddd in" />
//       </form>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import useLogin from "../Logic/useLogin";
// import InputField from "../hooks/inputField";
// import Button from "../hooks/ButtonAuth";

// const Login = () => {
//   const [email, setEmailSignup] = useState("");
//   const [password, setPasswordSignup] = useState("");

//   const { handleLogin } = useLogin();

//   const isValid = () => {
//     const emailValid = /\S+@\S+\.\S+/.test(email);
//     const passwordValid = password.length >= 6;
//     return emailValid && passwordValid;
//   };

//   const handleSubmit = async (
//     e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
//   ) => {
//     // Handle the click event

//     e.preventDefault(); // Previne o comportamento padrão do formulário

//     try {
//       if (isValid()) {
//         // Lógica para envio dos dados se válidos
//         console.log("Email e senha válidos!");

//         // Chame a função handleLogin (se for uma operação assíncrona, use await)
//         await handleLogin(e); // Se handleLogin for uma função assíncrona
//       } else {
//         console.log("Email ou senha inválidos.");
//       }
//     } catch (error) {
//       // Lida com erros que podem ocorrer durante o processo
//       console.error("Ocorreu um erro:", error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <InputField
//           type="email"
//           value={email}
//           onChange={(e) => setEmailSignup(e.target.value)}
//           placeholder="Email"
//           label="Email"
//         />

//         <InputField
//           type="password"
//           value={password}
//           onChange={(e) => setPasswordSignup(e.target.value)}
//           placeholder="Password"
//           label="Password"
//         />
//       </form>
//       <Button
//         onClick={handleSubmit}
//         disabled={!isValid()}
//         label="Log in"
//         variant={isValid() ? "btn-primary" : "btn-secondary"}
//       />
//     </div>
//   );
// };

// export default Login;
