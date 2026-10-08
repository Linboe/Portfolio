import Section from '../../components/Section/Section';
import { skills } from '../../data/skills';
import styles from './About.module.css';

function About() {
    return (
        <Section id="about" title="About" variant="alt">
            <div className={styles.layout}>
                <div>
                    <p className={styles.paragraph}>about me.</p>
                    <p className={styles.paragraph}>background and goals.</p>
                </div>

                <div>
                    <h3 className={styles.skillsTitle}>Technical skills</h3>
                    <ul className={styles.skillList}>
                        {skills.map((skill) => (
                            <li key={skill} className={styles.skill}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}

export default About;
