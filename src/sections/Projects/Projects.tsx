import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectFilter from '../../components/ProjectFilter/ProjectFilter';
import Section from '../../components/Section/Section';
import { projects } from '../../data/projects';
import type { Technology } from '../../types/project';
import styles from './Projects.module.css';

const technologies: Technology[] = [
    ...new Set(projects.flatMap((project) => project.technologies)),
];

function Projects() {
    const [selectedTags, setSelectedTags] = useState<Technology[]>([]);

    function handleToggle(tag: Technology) {
        setSelectedTags((prev) =>
            prev.includes(tag)
                ? prev.filter((selected) => selected !== tag)
                : [...prev, tag],
        );
    }

    function handleClear() {
        setSelectedTags([]);
    }

    // Räknas fram vid rendering, sparas inte i eget state
    const visibleProjects =
        selectedTags.length === 0
            ? projects
            : projects.filter((project) =>
                  project.technologies.some((tech) =>
                      selectedTags.includes(tech),
                  ),
              );

    return (
        <Section id="projects" title="Projects">
            <ProjectFilter
                technologies={technologies}
                selectedTags={selectedTags}
                onToggle={handleToggle}
                onClear={handleClear}
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
