import type { ReactNode } from "react";

export type NavLink = {
    href: string;
    label: string;
};

export type ContactLink = {
    label: ReactNode;
    value: string;
    href: string;
};
