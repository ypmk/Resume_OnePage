import React from "react";
import styles from "./Experience.module.css";

interface ExperienceProps {
    experience: {
        role: string;
        company: string;
        duration: string;
    }[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
    return (
        <section className={styles.experience}>
            <h3>Experience</h3>
            {experience.map((job, index) => (
                <div key={index}>
                    <h4>{job.role}</h4>
                    <p>{job.company} ({job.duration})</p>
                </div>
            ))}
        </section>
    );
};

export default Experience;
