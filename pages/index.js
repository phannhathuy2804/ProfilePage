import Head from "next/head";
import About from "../components/TechStack";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.css";
import TechStack from "../components/TechStack";

export default function Home() {
    return (
        <div>
            <Banner />
            <TechStack />
            <Projects />
            {/* <Contact /> */}
        </div>
    );
}
