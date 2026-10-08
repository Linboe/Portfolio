import Section from '../../components/Section/Section';
import { skills } from '../../data/skills';
import styles from './About.module.css';

function About() {
    return (
        <Section id="about" title="Om mig" variant="alt">
            <div className={styles.layout}>
                <div>
                    <p className={styles.paragraph}>
                        Berätta om dig själv här.
                    </p>
                    <p className={styles.paragraph}>
                        Ett stycke till om din bakgrund och dina mål.
                    </p>
                </div>

                <div>
                    <h3 className={styles.skillsTitle}>Kompetenser</h3>
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
