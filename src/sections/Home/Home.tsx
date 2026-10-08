import Container from '../../components/Container/Container';
import LinkButton from '../../components/LinkButton/LinkButton';
import styles from './Home.module.css';

function Home() {
    return (
        <section id="home" className={styles.home}>
            <Container className={styles.homeContent}>
                <p className={styles.greeting}>Hi, I'm</p>
                <h1 className={styles.name}>Linn</h1>
                <p className={styles.role}>Frontend Developer</p>
                <p className={styles.intro}>
                    Looking for LIA.
                </p>
                <div className={styles.actions}>
                    <LinkButton href="#projects">View my projects</LinkButton>
                    <LinkButton href="#contact" variant="secondary">
                        Contact me
                    </LinkButton>
                </div>
            </Container>
        </section>
    );
}

export default Home;
