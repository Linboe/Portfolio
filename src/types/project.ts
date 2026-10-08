export type Technology = 'React' | 'TypeScript' | 'JavaScript' | 'CSS';

export type ProjectFilterValue = Technology | 'All';

export type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    technologies: Technology[];
    liveUrl?: string;
    repoUrl?: string;
};
