import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectFilter from '../../components/ProjectFilter/ProjectFilter';
import Section from '../../components/Section/Section';
import { projects } from '../../data/projects';
import type { ProjectFilterValue, Technology } from '../../types/project';
import styles from './Projects.module.css';

// Alla unika tekniker som finns i datan, så filterknapparna följer projekten automatiskt
const technologies: Technology[] = [
    ...new Set(projects.flatMap((project) => project.technologies)),
];

function Projects() {
    const [selectedFilter, setSelectedFilter] =
        useState<ProjectFilterValue>('All');

    // Räknas fram vid rendering, sparas inte i eget state
    const visibleProjects =
        selectedFilter === 'All'
            ? projects
            : projects.filter((project) =>
                  project.technologies.includes(selectedFilter),
              );

    return (
        <Section id="projects" title="Projects">
            <ProjectFilter
                technologies={technologies}
                selectedFilter={selectedFilter}
                onSelect={setSelectedFilter}
            />

            <div className={styles.projectGrid}>
                {visibleProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Section>
    );
}

export default Projects;
