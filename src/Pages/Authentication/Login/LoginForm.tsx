import React from "react";
import InputField from "../CreateAccount/Signup/Frontend/inputField";
import Button from "../SharedComponentes/ButtonAuth";

import { useLoginProvider } from "../../../useContext/useLoginCredentialsContext/useLoginCredentialsContext";
import { useIsValidLogin } from "../SharedComponentes/useIsValid";
import { useHandleSubmitLogin } from "./useHandleSubmitLogin";
import ErrorDisplay from "../../../useContext/errorContext/ErrorDisplay";

const LoginForm: React.FC = () => {
  const { emailLogin, setEmailLogin, passwordLogin, setPasswordLogin } =
    useLoginProvider();

  const { handleSubmitLogin } = useHandleSubmitLogin();

  const { isValidLogin } = useIsValidLogin();

  return (
    <form onSubmit={handleSubmitLogin}>
      <InputField
        type="email"
        id="email"
        value={emailLogin}
        onChange={(e) => setEmailLogin(e.target.value)}
        placeholder="Enter your email"
        label="Email"
      />

      <InputField
        type="password"
        id="password"
        value={passwordLogin}
        onChange={(e) => setPasswordLogin(e.target.value)}
        placeholder="Enter your password"
        label="Password"
      />

      <Button
        type="submit"
        label="Log in"
        disabled={!emailLogin || !passwordLogin || !isValidLogin()}
        context="login"
      />
      <div className="pt-3">
        {" "}
        <ErrorDisplay />
      </div>
    </form>
  );
};

export default LoginForm;
