import TopBarProfile from "../../../SharedComponents/Bars/TopBarProfile/TopBarProfile";
import HeaderProfile from "./ProfileHeaderComponentes/HeaderProfile";
import ProfileTabs from "./ProfileTabs/ProfileTabs";

const ContentProfile = () => {
  return (
    <div className="d-flex flex-column align-items-center w-75  w100Mobile">
      <TopBarProfile />
      <HeaderProfile />
      <ProfileTabs />
    </div>
  );
};

export default ContentProfile;
