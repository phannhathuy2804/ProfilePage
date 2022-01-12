import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h3>James Phan</h3>
      </div>
      <nav className="nav">
        <AnchorLink href="#home">
          <a>Home</a>
        </AnchorLink>
        <AnchorLink href="#about">
          <a>About Me</a>
        </AnchorLink>
        <AnchorLink href="#projects">
          <a>Projects</a>
        </AnchorLink>
        <AnchorLink href="#experience">
          <a>Experience</a>
        </AnchorLink>
        <AnchorLink href="#contact">
          <a>Contact</a>
        </AnchorLink>
      </nav>
    </div>
  );
};

export default Navbar;
