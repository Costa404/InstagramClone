const links = [
  "About",
  "Help",
  "Press",
  "API",
  "Jobs",
  "Privacy",
  "Terms",
  "Locations",
  "Language",
  "Meta Verified",
];

const FooterLinks = () => {
  return (
    <div
      className="d-flex mt-5 flex-wrap text-secondary  "
      style={{ columnGap: "1rem" }}
    >
      {links.map((link, index) => (
        <a key={index} className="text-secondary" href="#">
          <span>{link}</span>
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
