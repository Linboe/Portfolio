import styles from './Footer.module.css';

type FooterProps = {
    name: string;
};

function Footer({ name }: FooterProps) {
    return (
        <footer className={styles.footer}>
            © {new Date().getFullYear()} {name}
        </footer>
    );
}

export default Footer;
