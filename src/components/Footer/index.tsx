import React from "react";
import styles from "./Footer.module.css";

interface FooterProps {
    hobbies: string[];
}

const Footer: React.FC<FooterProps> = ({ hobbies }) => {
    return (
        <footer className={styles.footer}>
            <h3>Hobbies</h3>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </footer>
    );
};

export default Footer;
