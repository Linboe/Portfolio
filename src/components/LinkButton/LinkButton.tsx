import type { ReactNode } from 'react';
import styles from './LinkButton.module.css';

type LinkButtonProps = {
    href: string;
    children: ReactNode;
};

function LinkButton({ href, children }: LinkButtonProps) {
    return (
        <a href={href} className={styles.button}>
            {children}
        </a>
    );
}

export default LinkButton;
