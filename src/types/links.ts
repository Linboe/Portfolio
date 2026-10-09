import type { ReactNode } from "react";

export type NavLink = {
    href: string;
    label: string;
};

export type ContactLink = {
    label: string;
    value: ReactNode;
    href: string;
};
