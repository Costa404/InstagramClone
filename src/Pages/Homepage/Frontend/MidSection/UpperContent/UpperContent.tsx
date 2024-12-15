import { generateUsers } from "./generateUsers";
import { TitleWithAlternateColor } from "./TitleWithAlternateColor";

const UpperContent = () => {
  const users = generateUsers(8);

  return (
    <section className="w-100">
      <TitleWithAlternateColor title1="For You " title2="Following" />
      <div className="d-flex gap-4 border-top border-0 border-dark pt-5 overflow-scroll">
        {users.map((user, index) => (
          <div key={index} className="text-center w-100 flex-grow-1 ">
            <img
              src={user.userProfileImage}
              alt={user.userName}
              className="rounded-circle "
              style={{ width: "6.5rem" }}
            />
            <p className=" mt-1 text-truncate " style={{ width: "6.5rem" }}>
              {user.userName}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpperContent;
