import { useState } from 'react';
import type { NavLink } from '../../types/links';
import Container from '../Container/Container';
import styles from './Navbar.module.css';

type NavbarProps = {
    brand: string;
    links: NavLink[];
};

function Navbar({ brand, links }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuClassName = isMenuOpen
        ? `${styles.menu} ${styles.menuOpen}`
        : styles.menu;

    return (
        <header className={styles.navbar}>
            <Container className={styles.navbarInner}>
                <a href="#home" className={styles.brand}>
                    {brand}
                </a>

                <button
                    type="button"
                    className={styles.menuButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
                    aria-expanded={isMenuOpen}
                    aria-controls="main-menu"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <nav id="main-menu" className={menuClassName}>
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.menuLink}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </Container>
        </header>
    );
}

export default Navbar;
