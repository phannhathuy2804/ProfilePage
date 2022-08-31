import AnchorLink from "react-anchor-link-smooth-scroll";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <h3 style={{ display: "inline" }}>James Phan</h3> &emsp;
                <a
                    className="socialLink"
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href="https://github.com/phannhathuy2804"
                >
                    <FontAwesomeIcon
                        size="xl"
                        icon={faGithub}
                    ></FontAwesomeIcon>
                </a>
                &ensp;
                <a
                    className="socialLink"
                    rel={"noopener noreferrer"}
                    target={"_blank"}
                    href="https://www.linkedin.com/in/james-phan-2804/"
                >
                    <FontAwesomeIcon
                        size="xl"
                        icon={faLinkedin}
                    ></FontAwesomeIcon>
                </a>
            </div>
            <nav className="nav">
                <AnchorLink href="#home">Home</AnchorLink>

                <AnchorLink href="#techstack">My skills</AnchorLink>

                <AnchorLink href="#projects">Projects</AnchorLink>

                {/* <AnchorLink href="#contact">Contact</AnchorLink> */}
            </nav>
        </div>
    );
};

export default Navbar;
