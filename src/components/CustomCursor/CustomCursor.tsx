import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './CustomCursor.module.css';

gsap.registerPlugin(useGSAP);

const LINK = 'a, button, label, summary, [role="button"], [data-cursor-hover]';
const TEXT = 'input, textarea, select, [contenteditable="true"]';

type CursorState = 'default' | 'link' | 'label' | 'text';

function CustomCursor() {
    const followerRef = useRef<HTMLDivElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        // Bara för enheter med mus (inte touch)
        mm.add('(hover: hover) and (pointer: fine)', () => {
            const root = rootRef.current!;
            const follower = followerRef.current!;
            const label = labelRef.current!;
            const html = document.documentElement;

            html.classList.add('has-custom-cursor');

            let hasMoved = false;

            const setState = (state: CursorState, text = '') => {
                if (root.dataset.state === state && label.textContent === text)
                    return;
                root.dataset.state = state;
                label.textContent = text;
            };

            // Ingen följning: positionen sätts direkt på musen
            const onMove = (e: PointerEvent) => {
                if (e.pointerType !== 'mouse') return;

                if (!hasMoved) {
                    hasMoved = true;
                    root.dataset.visible = 'true';
                }

                gsap.set(follower, { x: e.clientX, y: e.clientY });
            };

            const onOver = (e: PointerEvent) => {
                if (!(e.target instanceof Element)) return;

                const labelled = e.target.closest<HTMLElement>('[data-cursor]');

                if (labelled) setState('label', labelled.dataset.cursor ?? '');
                else if (e.target.closest(TEXT)) setState('text');
                else if (e.target.closest(LINK)) setState('link');
                else setState('default');
            };

            const onDown = () => {
                root.dataset.pressed = 'true';
            };
            const onUp = () => {
                delete root.dataset.pressed;
            };
            const onLeave = () => {
                root.dataset.visible = 'false';
            };
            const onEnter = () => {
                if (hasMoved) root.dataset.visible = 'true';
            };

            window.addEventListener('pointermove', onMove);
            window.addEventListener('pointerover', onOver);
            window.addEventListener('pointerdown', onDown);
            window.addEventListener('pointerup', onUp);
            html.addEventListener('mouseleave', onLeave);
            html.addEventListener('mouseenter', onEnter);

            return () => {
                html.classList.remove('has-custom-cursor');
                window.removeEventListener('pointermove', onMove);
                window.removeEventListener('pointerover', onOver);
                window.removeEventListener('pointerdown', onDown);
                window.removeEventListener('pointerup', onUp);
                html.removeEventListener('mouseleave', onLeave);
                html.removeEventListener('mouseenter', onEnter);
            };
        });
    });

    return (
        <div
            ref={rootRef}
            className={styles.cursor}
            data-state="default"
            data-visible="false"
            aria-hidden="true"
        >
            <div ref={followerRef} className={styles.follower}>
                <div className={styles.shape}>
                    <span ref={labelRef} className={styles.label} />
                </div>
            </div>
        </div>
    );
}

export default CustomCursor;
