import React from "react";

import UsersDisplayList from "./UsersDisplayList";
import { TitleWithAlternateColor } from "../Frontend/MidSection/UpperContent/TitleWithAlternateColor";

const UsersDispaly: React.FC = () => {
  return (
    <section
      className=" d-flex flex-column align-items-center w-100 "
      style={{
        minHeight: "100vh",
        marginLeft: "33.5rem",
      }}
    >
      <div
        className="  border-bottom border-dark mb-5 pt-5 "
        style={{ width: "90%" }}
      >
        <TitleWithAlternateColor title1="Suggested for you" />
      </div>

      <UsersDisplayList />
    </section>
  );
};

export default UsersDispaly;
