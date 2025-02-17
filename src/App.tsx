import styles from './App.module.css'
import Header from "./components/Header";
import data from "./components/data.ts";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header {...data.header} />
            <About {...data.about}/>
            <Skills skills={data.skills} />
            <Experience experience={data.experience} />
            <Education education={data.education} />
            <Projects projects={data.projects} />
            <Footer {...data.footer} />

        </div>
    );
};


export default App
