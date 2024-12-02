import { useSignupProvider } from "../../../../../useContext/useSignupContext/useSignupCredentialsContext";

import Button from "../../../SharedComponentes/ButtonAuth";
import { useIsValidSignup } from "../../../SharedComponentes/useIsValid";
import { useHandleSubmitSignup } from "../logic/useHandleSubmitSignup";
import InfoLinks from "./InfoLinks";
import InputField from "./inputField";

const SignupForm: React.FC = () => {
  const {
    emailSignup,
    setEmailSignup,
    passwordSignup,
    setPasswordSignup,
    fullNameSignup,
    setFullNameSignup,
    userNameSignup,
    setUserNameSignup,
  } = useSignupProvider();

  const { handleSubmitSignup, errorSignup } = useHandleSubmitSignup();

  const { isValidSignup } = useIsValidSignup();

  return (
    <form onSubmit={handleSubmitSignup}>
      <InputField
        type="email"
        id="email"
        value={emailSignup}
        onChange={(e) => setEmailSignup(e.target.value)}
        placeholder="Email"
        label="Email"
      />

      {errorSignup.email && <p style={{ color: "red" }}>{errorSignup.email}</p>}

      <InputField
        type="password"
        id="password"
        value={passwordSignup}
        onChange={(e) => setPasswordSignup(e.target.value)}
        placeholder="Password"
        label="Password"
      />

      <InputField
        type="text"
        id="fullnameSign"
        value={fullNameSignup}
        onChange={(e) => setFullNameSignup(e.target.value)}
        placeholder="Full Name"
        label="Full Name"
      />

      <InputField
        type="text"
        id="userName"
        value={userNameSignup}
        onChange={(e) => setUserNameSignup(e.target.value)}
        placeholder="Username"
        label="Username"
      />
      {errorSignup.userName && (
        <p style={{ color: "red" }}>{errorSignup.userName}</p>
      )}

      <InfoLinks />
      <Button
        type="submit"
        label="Next"
        disabled={
          !emailSignup ||
          !passwordSignup ||
          !fullNameSignup ||
          !userNameSignup ||
          !isValidSignup()
        }
        context="signup"
      />
      <p className="mt-5">
        You can also <a href="">report content that you believe is unlawful</a>{" "}
        in your country without logging in.
      </p>
    </form>
  );
};

export default SignupForm;
