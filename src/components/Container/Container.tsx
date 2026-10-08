import type { ReactNode } from 'react';
import styles from './Container.module.css';

type ContainerProps = {
    children: ReactNode;
    className?: string;
};

function Container({ children, className = '' }: ContainerProps) {
    return <div className={`${styles.container} ${className}`}>{children}</div>;
}

export default Container;
