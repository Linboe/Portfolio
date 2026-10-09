import type { ContactLink } from '../types/links';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';

export const contacts: ContactLink[] = [
    {
        label: <BiLogoGmail size={24} />,
        value: 'linn.boek@gmail.com',
        href: 'mailto:linn.boek@gmail.com',
    },
    {
        label: <FiGithub size={24} />,
        value: 'linboe',
        href: 'https://github.com/linboe',
    },
    {
        label: <FaLinkedin size={24} />,
        value: 'linnboekhout',
        href: 'https://www.linkedin.com/in/linn-boekhout-78143b398/',
    },
];
