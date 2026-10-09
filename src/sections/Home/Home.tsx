import Container from '../../components/Container/Container';
import LinkButton from '../../components/LinkButton/LinkButton';
import styles from './Home.module.css';

export function Home() {
    return (
        <section id="home" className={styles.home}>
            <Container className={styles.homeContent}>
                <p
                    className={`${styles.greeting} ${styles.reveal}`}
                    style={{ animationDelay: '0.1s' }}
                >
                    Hi, I'm
                </p>
                <h1
                    className={`${styles.name} ${styles.reveal}`}
                    style={{ animationDelay: '0.2s' }}
                >
                    Linn
                </h1>
                <p
                    className={`${styles.role} ${styles.reveal}`}
                    style={{ animationDelay: '0.3s' }}
                >
                    Frontend Developer student
                </p>
                <p
                    className={`${styles.intro} ${styles.reveal}`}
                    style={{ animationDelay: '0.4s' }}
                >
                    Focused on creating clean code, modern user interfaces, and
                    seamless web experiences. Looking for an internship (LIA)
                    Spring 2027.
                </p>
                <div
                    className={`${styles.actions} ${styles.reveal}`}
                    style={{ animationDelay: '0.5s' }}
                >
                    <LinkButton href="#projects" variant="secondary">
                        View my projects
                    </LinkButton>
                    <LinkButton href="#contact" variant="secondary">
                        Let's talk
                    </LinkButton>
                </div>
            </Container>
        </section>
    );
}

export default Home;
