import HeaderProfile from "./ProfileHeaderComponentes/HeaderProfile";
import ProfileTabs from "./ProfileTabs/ProfileTabs";

const ContentProfile = () => {
  return (
    <div className="d-flex flex-column align-items-center w100Mobile">
      <HeaderProfile />
      <ProfileTabs />
    </div>
  );
};

export default ContentProfile;
