import React from "react";
import styles from "./Education.module.css";

interface EducationProps {
    education: {
        degree: string;
        university: string;
        years: string;
    }[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
    return (
        <section className={styles.education}>
            <h3>Education</h3>
            {education.map((edu, index) => (
                <div key={index}>
                    <h4>{edu.degree}</h4>
                    <p>{edu.university} ({edu.years})</p>
                </div>
            ))}
        </section>
    );
};

export default Education;
