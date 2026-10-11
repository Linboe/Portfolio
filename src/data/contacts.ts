import { BiLogoGmail } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import type { ContactLink } from '../types/links';

export const contacts: readonly ContactLink[] = [
    {
        label: 'E-mail',
        icon: BiLogoGmail,
        href: 'mailto:linn.boek@gmail.com',
    },
    {
        label: 'GitHub',
        icon: FiGithub,
        href: 'https://github.com/linboe',
    },
    {
        label: 'LinkedIn',
        icon: FaLinkedin,
        href: 'https://www.linkedin.com/in/linn-boekhout-78143b398/',
    },
];
