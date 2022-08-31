import Typewriter from "typewriter-effect";

const Banner = () => {
    return (
        <div id="home" className="banner page">
            <div className="content">
                <div className="profile">
                    <h2 className="title welcome">Welcome to my portfolio</h2>
                    <h2 className="title greeting">My name is</h2>
                    <h1 className="title name">James Phan</h1>
                </div>
                <div className="aboutMe">
                    <div className="container ">
                        <h2 className="title">About me</h2>
                        <div className="description">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter

                                        .typeString(
                                            "Hi, my name is James Phan, I’m a junior Software Developer and currently living in Vancouver, BC, Canada.<br></br>I recently completed with Bachelor Degree in Computer Science from Simon Fraser University and really excited to start my career in Tech.<br></br>My main interest is Apps and Systems development. I’ve been exposed with many technologies from Web to Mobile and eager to learn new technologies to broaden my knowledge. A few technologies that I’ve used are Angular, ReactJS, NodeJS, Spring Boot , SQL/NoSQL, etc. Some programming languages that I’ve been using for my previous projects and in my internships are JavaScript/TypeScript, Java, Python, C/C++.<br></br>Aside from those above, I also have some experience in software testing that I learned during my last internship. And I think this skill will be extremely useful for my career.<br></br>Lastly, my ultimate career goal is to keep learning, improving and sharing so we can together create amazing products. "
                                        )

                                        .start();
                                }}
                                options={{
                                    delay: 15,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
