import {
    faLocationDot,
    faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";

const TechStack = () => {
    return (
        <div id="techstack" className="techstack page">
            <div className="content">
                <h1 className="title skills ">My Skills</h1>
                <div className="content">
                    <div className="skills ">
                        <Fade direction="up">
                            <div className="skill" id="language">
                                <h2 className="title">Programing Language </h2>
                                <div className="description">
                                    <ul>
                                        <li>JavaScript</li>
                                        <li>TypeScript</li>
                                        <li>Python</li>
                                        <li>C/C++</li>
                                        <li>Java</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade direction="up">
                            <div className="skill" id="framework">
                                <h2 className="title">
                                    Framework & Technologies
                                </h2>
                                <div className="description">
                                    <ul>
                                        <li>React</li>
                                        <li>Angular</li>
                                        <li>NodeJS</li>
                                        <li>ExpressJS</li>
                                        <li>Spring Boot</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade direction="up">
                            <div className="skill" id="database">
                                <h2 className="title">Databases</h2>
                                <div className="description">
                                    <ul>
                                        <li>MongoDB</li>
                                        <li>PostgreSQL</li>
                                    </ul>
                                </div>
                                <h2 className="title">Infrastructure</h2>
                                <div className="description">
                                    <ul>
                                        <li>GCP</li>
                                        <li>NginX</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade direction="up">
                            <div className="skill" id="tools">
                                <h2 className="title">
                                    Other Tools and Technologies{" "}
                                </h2>
                                <div className="description">
                                    <ul>
                                        <li>Git</li>
                                        <li>Jira</li>
                                        <li>Docker</li>
                                        <li>Firebase</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="experiences">
                        <h1 className="title skills ">Experience</h1>
                        <div className="content">
                            <div className="experience">
                                <h3>Software Test Engineer Coop</h3>
                                <h3 style={{ display: "inline" }}>
                                    Sierra Wireless &emsp; &emsp;
                                </h3>
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                ></FontAwesomeIcon>
                                &ensp; Richmond, BC, Canada <br />
                                <FontAwesomeIcon
                                    icon={faCalendarAlt}
                                ></FontAwesomeIcon>{" "}
                                &ensp; Jan 2021 - Aug 2021
                            </div>
                            <div className="experience">
                                <h3>Software Developer Intern</h3>
                                <h3 style={{ display: "inline" }}>
                                    TMA Solutions &emsp; &emsp;
                                </h3>
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                ></FontAwesomeIcon>
                                &ensp; Vietnam <br />
                                <FontAwesomeIcon
                                    icon={faCalendarAlt}
                                ></FontAwesomeIcon>{" "}
                                &ensp; Apr 2019 - Dec 2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;
