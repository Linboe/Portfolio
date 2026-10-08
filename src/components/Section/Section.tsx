import type { ReactNode } from 'react';
import Container from '../Container/Container';
import styles from './Section.module.css';

type SectionProps = {
    id: string;
    title: string;
    variant?: 'default' | 'alt';
    children: ReactNode;
};

function Section({ id, title, variant = 'default', children }: SectionProps) {
    const sectionClassName =
        variant === 'alt'
            ? `${styles.section} ${styles.sectionAlt}`
            : styles.section;

    return (
        <section id={id} className={sectionClassName}>
            <Container>
                <h2 className={styles.title}>{title}</h2>
                {children}
            </Container>
        </section>
    );
}

export default Section;
