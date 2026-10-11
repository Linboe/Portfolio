import type { IconType } from 'react-icons';

export type NavLink = {
    href: string;
    label: string;
};

export type ContactLink = {
    readonly label: string;
    readonly icon: IconType;
    readonly href: string;
};

