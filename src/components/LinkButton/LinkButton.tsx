import type { ReactNode } from 'react';
import styles from './LinkButton.module.css';

type LinkButtonProps = {
    href: string;
    variant?: 'primary' | 'secondary';
    children: ReactNode;
};

function LinkButton({ href, variant = 'primary', children }: LinkButtonProps) {
    return (
        <a href={href} className={`${styles.button} ${styles[variant]}`}>
            {children}
        </a>
    );
}

export default LinkButton;
