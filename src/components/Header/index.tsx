import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
    name: string;
    title: string;
    links: {
        website: string;
        github: string;
        linkedin: string;
        twitter: string;
    };
}

const Header: React.FC<HeaderProps> = ({ name, title, links }) => {
    return (
        <header className={styles.header}>
            <h1>{name}</h1>
            <h2>{title}</h2>
            <div className={styles.links}>
                <a href={links.website}>Website</a>
                <a href={links.github}>GitHub</a>
                <a href={links.linkedin}>LinkedIn</a>
                <a href={links.twitter}>Twitter</a>
            </div>
        </header>
    );
};

export default Header;