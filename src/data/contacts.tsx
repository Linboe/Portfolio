import type { ContactLink } from '../types/links';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';

export const contacts: ContactLink[] = [
    {
        label: 'E-mail',
        value: <BiLogoGmail size={24} />,
        href: 'mailto:linn.boek@gmail.com',
    },
    {
        label: 'GitHub',
        value: <FiGithub size={24} />,
        href: 'https://github.com/linboe',
    },
    {
        label: 'LinkedIn',
        value: <FaLinkedin size={24} />,
        href: 'https://www.linkedin.com/in/linn-boekhout-78143b398/',
    },
];
