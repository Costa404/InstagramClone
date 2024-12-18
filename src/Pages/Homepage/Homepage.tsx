import CentralContent from "./Frontend/MidSection/CentralContent";
// import { PostsCollection } from "./PostsFeed/PostsCollection";

const Homepage = () => {
  // const test = async () => {
  //   await createPostsForExistingFakeUsers();
  // };

  // test();

  return (
    <section
      className="  d-flex justify-content-center     "
      style={{
        maxWidth: "100vw",
        minHeight: "100vh",
        overflowX: "hidden",
        zIndex: "3",
      }}
    >
      <CentralContent />
      {/* <PostsCollection /> */}
    </section>
  );
};

export default Homepage;
