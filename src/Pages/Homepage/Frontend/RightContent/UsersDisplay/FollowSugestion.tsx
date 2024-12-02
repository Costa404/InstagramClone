import { Link } from "react-router-dom";
import { generateUsers } from "../../MidSection/UpperContent/generateUsers";

// ajuste o caminho conforme necessário

const UpperContent = () => {
  const users = generateUsers(5); // Gera 8 usuários para exibir

  return (
    <section className=" d-flex flex-column  " style={{ zIndex: "2" }}>
      <div className="d-flex justify-content-between align-items-center  w-100 py-4 ">
        <div className="d-flex flex-column ">
          <p className="fs-4 fw-bolder text-secondary">Suggested for you</p>
        </div>

        <Link to="/Homepage/allUsers">
          {" "}
          {/* Use "all-users" em vez de "allUsers" para seguir a convenção */}
          <h6 className=" fs-5">See All</h6>
        </Link>
      </div>
      <div className="d-flex flex-column gap-3  w-100 ">
        {users.map((user, index) => (
          <div
            key={index}
            className="text-center d-flex justify-content-between align-items-center gap-4"
          >
            <div
              className="d-flex align-items-center gap-3 text-left "
              style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            >
              <img
                src={user.userProfileImage}
                alt={user.userName}
                className="rounded-circle bg-danger"
                style={{ width: "4rem", height: "4rem" }}
              />
              <div className="d-flex flex-column " style={{ minWidth: "80%" }}>
                <h1 className=" fs-5 fw-bolder text-start text-truncate w-auto mb-0">
                  {user.userName}
                </h1>
                <h6
                  className="text-secondary text-truncate w-100 mb-0"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontWeight: "700",
                  }}
                >
                  Followed by {user.userName} and{" "}
                  {Math.floor(Math.random() * 20)} others users.
                </h6>
              </div>
            </div>
            <div className="d-flex">
              <a href="" className="switchColorToWhiteA text-primary">
                <p>Follow</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpperContent;
