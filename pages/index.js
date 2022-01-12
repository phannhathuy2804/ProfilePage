import Head from "next/head";
import About from "../components/About";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Projects />
    </div>
  );
}
