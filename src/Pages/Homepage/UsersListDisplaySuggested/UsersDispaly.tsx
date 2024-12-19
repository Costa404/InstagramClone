import React from "react";

import UsersDisplayList from "./UsersDisplayList";
import { TitleWithAlternateColor } from "../Frontend/MidSection/UpperContent/TitleWithAlternateColor";

const UsersDispaly: React.FC = () => {
  return (
    <section
      className=" d-flex flex-column align-items-center w-100  "
      style={{
        minHeight: "100vh",
      }}
    >
      <div
        className="   border-bottom border-dark mb-5 pt-5 titleContainerSuggestUsers "
        style={{ width: "60%" }}
      >
        <TitleWithAlternateColor title1="Suggested for you" />
      </div>

      <UsersDisplayList />
    </section>
  );
};

export default UsersDispaly;
