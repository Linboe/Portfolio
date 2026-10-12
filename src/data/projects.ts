import type { Project } from '../types/project';
import image1 from '../assets/projects/project-webshop-yuum.png';
import image2 from '../assets/projects/project-budget-planner.png';
import image3 from '../assets/projects/project-escape-room-memory.png';
import image4 from '../assets/projects/project-book-app.png';
import image5 from '../assets/projects/project-memcap.png';
import image6 from '../assets/projects/project-bubs.png';
import image7 from '../assets/projects/project-gsap-animation.png';
import image8 from '../assets/projects/project-eshop-database.png'

export const projects: Project[] = [
    {
        id: 1,
        title: 'Webshop - YUUM',
        description: 'A responsive, keyboard-accessible single-page webshop.',
        imageUrl: image1,
        technologies: ['CSS', 'JavaScript'],
        liveUrl: 'https://linboe.github.io/Webshop---YUUM/',
        repoUrl: 'https://github.com/Linboe/Webshop---YUUM',
    },
    {
        id: 2,
        title: 'Budget Planner',
        description:
            'A simple budget planner designed to help users track income and expenses.',
        imageUrl: image2,
        technologies: ['CSS', 'TypeScript'],
        liveUrl: 'https://linboe.github.io/Budget-Planner/',
        repoUrl: 'https://github.com/Linboe/Budget-Planner',
    },
    {
        id: 3,
        title: 'Escape Room - Stranger Woods',
        description:
            'A digital escape room experience. The game consists of 6 interconnected rooms.',
        imageUrl: image3,
        technologies: ['CSS', 'TypeScript', 'Group project'],
        liveUrl:
            'https://medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-dopefish-admirers/',
        repoUrl: 'https://github.com/Linboe/Escape-room---group-project',
    },
    {
        id: 4,
        title: 'Full-stack Book-app ',
        description:
            'A full-stack MongoDB application featuring end-to-end CRUD capabilities for book catalog management.',
        imageUrl: image4,
        technologies: [
            'TypeScript',
            'CSS',
            'MongoDB',
            'Express',
            'Group project',
        ],
    },
    {
        id: 5,
        title: 'Frontend Design Implementation - Memcap',
        description:
            'A typography-focused landing page coded from a Figma design with an emphasis on responsiveness.',
        imageUrl: image5,
        technologies: ['CSS', 'TypeScript', 'Group project'],
        liveUrl:
            'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-memcap/',
    },
    {
        id: 6,
        title: 'Figma Design - Bubs',
        description: 'A website redesign for the candy brand Bubs.',
        imageUrl: image6,
        technologies: ['Figma', 'Group project'],
        liveUrl:
            'https://www.figma.com/proto/xzW12DwasyUBEM36vQMcja/Grafisk-design-kurs?node-id=20-55&t=IGBxc0WY8wIUcXAv-1&starting-point-node-id=20%3A55&show-proto-sidebar=1',
        repoUrl:
            'https://www.figma.com/design/xzW12DwasyUBEM36vQMcja/Grafisk-design-kurs?node-id=20-54&t=iRVlbkBoUPNse7J7-1',
    },
    {
        id: 7,
        title: 'GSAP Animation',
        description: 'SVG Animation with GSAP.',
        imageUrl: image7,
        technologies: ['JavaScript', 'CSS'],
        liveUrl:
            'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-individuell-Linboe/',
    },
    {
        id: 8,
        title: 'API Development and Database Normalization',
        description: 'A RESTful API for managing an e-shop product catalog.',
        imageUrl: image8,
        technologies: ['Express', 'TypeScript', 'MySQL'],
        repoUrl:
            'https://github.com/Linboe/Inl1-Api-utveckling-och-DB-normalisering',
    },
];
