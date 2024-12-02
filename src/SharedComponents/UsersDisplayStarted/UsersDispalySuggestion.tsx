import React from "react";

import UsersDisplayListSuggestion from "./UsersDisplayListSuggestion";
import { TitleWithAlternateColor } from "../../Pages/Homepage/Frontend/MidSection/UpperContent/TitleWithAlternateColor";

const UsersDispaly: React.FC = () => {
  return (
    <section
      className="bg-black d-flex flex-column align-items-center "
      style={{
        minHeight: "100vh",
      }}
    >
      <div
        className="  border-bottom border-dark mb-5 pt-5"
        style={{ width: "90%" }}
      >
        <TitleWithAlternateColor title1="Suggested for you" />
      </div>

      <h1 className="fs-1 text-white mb-5">Follow 5 accounts to get started</h1>

      <UsersDisplayListSuggestion />
    </section>
  );
};

export default UsersDispaly;
