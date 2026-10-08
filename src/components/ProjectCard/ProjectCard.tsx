import type { Project } from '../../types/project';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
    project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className={styles.card}>
            <img
                className={styles.cardImage}
                src={project.imageUrl}
                alt={`Skärmbild av ${project.title}`}
                loading="lazy"
            />

            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>

                <ul className={styles.tagList}>
                    {project.technologies.map((technology) => (
                        <li key={technology} className={styles.tag}>
                            {technology}
                        </li>
                    ))}
                </ul>

                <div className={styles.linkList}>
                    {project.liveUrl && (
                        <a
                            className={styles.link}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live
                        </a>
                    )}
                    {project.repoUrl && (
                        <a
                            className={styles.link}
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Kod
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
