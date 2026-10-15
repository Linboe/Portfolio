import Container from '../../components/Container/Container';
import LinkButton from '../../components/LinkButton/LinkButton';
import styles from './Home.module.css';
import artpic from '../../assets/artpic.jpg';

type HomeProps = {
    talkPulse?: number;
};

export function Home({ talkPulse = 0 }: HomeProps) {
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
                    style={{ animationDelay: '0.22s' }}
                >
                    Linn
                </h1>
                <div
                    className={`${styles.imageWrapper} ${styles.reveal}`}
                    style={{ animationDelay: '0.28s' }}
                >
                    <img
                        src={artpic}
                        alt="Linn"
                        className={styles.profileImg}
                    />
                </div>
                <p
                    className={`${styles.role} ${styles.reveal}`}
                    style={{ animationDelay: '0.34s' }}
                >
                    Frontend Developer student
                </p>
                <p
                    className={`${styles.intro} ${styles.reveal}`}
                    style={{ animationDelay: '0.46s' }}
                >
                    Focused on creating clean code, modern user interfaces, and
                    seamless web experiences. Looking for an internship (LIA)
                    Spring 2027.
                </p>
                <div
                    className={`${styles.actions} ${styles.reveal}`}
                    style={{ animationDelay: '0.58s' }}
                >
                    <LinkButton href="#projects">View my projects</LinkButton>

                    <span
                        key={talkPulse}
                        className={talkPulse > 0 ? styles.pulse : undefined}
                    >
                        <LinkButton href="#contact">Let's talk</LinkButton>
                    </span>
                </div>
            </Container>
        </section>
    );
}

export default Home;
