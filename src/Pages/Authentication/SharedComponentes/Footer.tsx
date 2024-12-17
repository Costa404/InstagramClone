const Footer = ({ textColor = "text-dark" }) => {
  return (
    <section className="justify-content-center d-flex  flex-column flex-wrap my-5 w-100 footerDisplayNoneMobile">
      <nav className="d-flex   ">
        <div className="container-fluid  d-flex w-100">
          <ul
            className="navbar-nav me-auto mb-2 flex-row  flex-wrap gap-3  d-flex w-100 justify-content-center
            "
          >
            {[
              "Meta",
              "About",
              "Blog",
              "Jobs",
              "Help",
              "API",
              "Privacy",
              "Cookie settings",
              "Terms",
              "Locations",
              "Instagram Lite",
              "Threads",
              "Contact uploading and non-users",
              "Meta Verified",
            ].map((item, index) => (
              <li className="nav-item d-flex" key={index}>
                <a className={`nav-link ${textColor}`} href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg">
        <ul className="d-flex flex-row flex-wrap gap-3 navbar-nav justify-content-center mb-2 mb-lg-0 w-100">
          <li className="nav-item">
            <a className={`nav-link ${textColor}`} href="#">
              English (UK)
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${textColor}`} href="#">
              © 2024 Instagram from Meta
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Footer;
