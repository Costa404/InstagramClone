import React from "react";

type BoxAccountProps = {
  handleSignUpOrLogIn: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void; // Tipando handleSignUp corretamente
  accountState: string;
  state: string;
};

const BoxAccount: React.FC<BoxAccountProps> = ({
  handleSignUpOrLogIn,
  accountState,
  state,
}) => {
  return (
    <div
      className="border border-dark mt-3 d-flex align-items-center justify-content-center"
      style={{ minWidth: "35rem", minHeight: "6.2rem" }}
    >
      <p className="text-center mb-0">
        {accountState} <br />
        <span
          className="text-center text-primary "
          style={{
            cursor: "pointer",
          }}
          onClick={handleSignUpOrLogIn}
        >
          {state}
        </span>
      </p>
    </div>
  );
};

export default BoxAccount;
