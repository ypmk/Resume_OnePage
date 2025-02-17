import React from "react";
import styles from "./Projects.module.css";

interface ProjectsProps {
    projects: {
        name: string;
        description: string;
        link: string;
        year: number;
    }[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <section className={styles.projects}>
            <h3>Projects</h3>
            {projects.map((project, index) => (
                <div key={index}>
                    <h4>{project.name} ({project.year})</h4>
                    <p>{project.description}</p>
                    <a href={project.link}>View Project</a>
                </div>
            ))}
        </section>
    );
};

export default Projects;
