import React from "react";
import styles from "./Skills.module.css";

interface SkillsProps {
    skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <section className={styles.skills}>
            <h3>Skills</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
