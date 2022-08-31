import { Fade } from "react-awesome-reveal";

const Projects = () => {
    return (
        <div id="projects" className="projects page">
            <div className="content">
                <h1 className="title">Projects</h1>
                <div className="project-list">
                    <Fade direction="left">
                        <div className="project" id="baytree">
                            <div className="photo">
                                <img src="/Baytree_Centre.jpg"></img>
                            </div>
                            <div className="info">
                                <h2 className="title"> BayTree Mentor App</h2>
                                <h3 className="technologies">
                                    Techstack: ReactJS, NodeJS, Express, MongoDB
                                    (MERN)
                                </h3>
                                <p className="description">
                                    Description: An web app that help the
                                    charity organization BayTree manage their
                                    volunteer and keep track of their mentorship
                                    program
                                </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction="right">
                        <div className="project" id="useify">
                            <div className="photo">
                                <img src="/useify.png"></img>
                            </div>
                            <div className="info">
                                <h2 className="title">
                                    {" "}
                                    Useify Marketplace App
                                </h2>
                                <h3 className="technologies">
                                    Techstack: Android, Kotlin, Firebase
                                </h3>
                                <p className="description">
                                    Description: An android native app that
                                    create a virtual marketplace where users
                                    sale and buy used items.
                                </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction="left">
                        <div className="project" id="package-tracker">
                            <div className="photo">
                                <img src="/java-spring-boot.png"></img>
                            </div>
                            <div className="info">
                                <h2 className="title">
                                    {" "}
                                    Package Delivery Tracker
                                </h2>
                                <h3 className="technologies">
                                    Techstack: Java, Swing, Spring Boot
                                </h3>
                                <p className="description">
                                    Description: An app that help user keep
                                    track of their delivery packages
                                </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction="right">
                        <div className="project" id="covid-tracker">
                            <div className="photo">
                                <img src="/covid-tracker.png"></img>
                            </div>
                            <div className="info">
                                <h2 className="title">
                                    {" "}
                                    Covid-19 Stat Tracker (Frontend app)
                                </h2>
                                <h3 className="technologies">
                                    Techstack: Angular, public Rest API
                                </h3>
                                <p className="description">
                                    Description: This app get Canadian covid19
                                    data from openCovid api and visualize those
                                    data in multiple type of graphs and charts.
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Projects;
