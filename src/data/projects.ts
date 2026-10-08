import type { Project } from '../types/project';
import image1 from '../assets/projects/project-example.png';
import image2 from '../assets/projects/project-example.png';
import image3 from '../assets/projects/project-example.png';
import image4 from '../assets/projects/project-example.png';
import image5 from '../assets/projects/project-example.png';
import image6 from '../assets/projects/project-example.png';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Weather App',
        description: 'Visar väder för valfri stad med data från ett öppet API.',
        imageUrl: image1,
        technologies: ['React', 'TypeScript'],
        liveUrl: 'https://example.com/weather',
        repoUrl: 'https://github.com/username/weather-app',
    },
    {
        id: 2,
        title: 'Recipe Finder',
        description: 'Sök bland recept och spara dina favoriter.',
        imageUrl: image2,
        technologies: ['React', 'JavaScript'],
        repoUrl: 'https://github.com/username/recipe-finder',
    },
    {
        id: 3,
        title: 'Task Manager',
        description:
            'Att göra-lista med kategorier och markering av klara uppgifter.',
        imageUrl: image3,
        technologies: ['React', 'TypeScript'],
        repoUrl: 'https://github.com/username/task-manager',
    },
    {
        id: 4,
        title: 'Quiz Game',
        description: 'Frågesport med poängräkning och olika svårighetsgrader.',
        imageUrl: image4,
        technologies: ['JavaScript'],
        liveUrl: 'https://example.com/quiz',
    },
    {
        id: 5,
        title: 'Landing Page',
        description: 'Responsiv landningssida byggd med enbart HTML och CSS.',
        imageUrl: image5,
        technologies: ['CSS'],
        repoUrl: 'https://github.com/username/landing-page',
    },
    {
        id: 6,
        title: 'Budget Tracker',
        description: 'Håll koll på inkomster och utgifter med diagram.',
        imageUrl: image6,
        technologies: ['TypeScript', 'CSS'],
        repoUrl: 'https://github.com/username/budget-tracker',
    },
];
