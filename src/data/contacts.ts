import type { ContactLink } from '../types/links';

export const contacts: ContactLink[] = [
    {
        label: 'E-post',
        value: 'namn@example.com',
        href: 'mailto:namn@example.com',
    },
    {
        label: 'GitHub',
        value: 'github.com/username',
        href: 'https://github.com/username',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/username',
        href: 'https://linkedin.com/in/username',
    },
];
