import HeaderProfile from "./ProfileHeaderComponentes/HeaderProfile";

const ContentProfile = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      {/* Passando username para HeaderProfile e ProfileTabs, caso necessário */}
      <HeaderProfile />
      {/* <ProfileTabs /> */}
    </div>
  );
};

export default ContentProfile;
