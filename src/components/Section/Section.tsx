import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Container from '../Container/Container';
import styles from './Section.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type SectionProps = {
    id: string;
    title: string;
    variant?: 'default' | 'alt';
    children: ReactNode;
};

function Section({ id, title, variant = 'default', children }: SectionProps) {
    const container = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add('(prefers-reduced-motion: no-preference)', () => {
                const items = gsap.utils.toArray<HTMLElement>(
                    '[data-reveal]',
                    container.current,
                );

                const hidden = { y: 60, opacity: 0 };

                const show = (batch: HTMLElement[]) =>
                    gsap.to(batch, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        stagger: 0.15,
                        overwrite: true,
                    });

                // Elementet är utanför bild när det nollställs, så det syns inte
                const hide = (batch: HTMLElement[]) =>
                    gsap.set(batch, { ...hidden, overwrite: true });

                gsap.set(items, hidden);

                ScrollTrigger.batch(items, {
                    start: 'top 88%',
                    end: 'bottom top',
                    onEnter: show,
                    onEnterBack: show,
                    onLeave: hide,
                    onLeaveBack: hide,
                });
            });
        },
        { scope: container },
    );

    const sectionClassName =
        variant === 'alt'
            ? `${styles.section} ${styles.sectionAlt}`
            : styles.section;

    return (
        <section id={id} ref={container} className={sectionClassName}>
            <Container>
                <h2 className={styles.title} data-reveal>
                    {title}
                </h2>
                {children}
            </Container>
        </section>
    );
}

export default Section;
