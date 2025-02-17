import React from "react";
import styles from "./About.module.css";

interface AboutProps {
    description: string;
    contact: {
        phone: string;
        email: string;
        location: string;
    };
}

const About: React.FC<AboutProps> = ({ description, contact }) => {
    return (
        <section className={styles.about}>
            <p>{description}</p>
            <div>
                <p>Phone: {contact.phone}</p>
                <p>Email: {contact.email}</p>
                <p>Location: {contact.location}</p>
            </div>
        </section>
    );
};

export default About;