import type { Technology } from '../../types/project';
import styles from './ProjectFilter.module.css';

type ProjectFilterProps = {
    technologies: Technology[];
    selectedTags: Technology[];
    onToggle: (tag: Technology) => void;
    onClear: () => void;
};

function ProjectFilter({
    technologies,
    selectedTags,
    onToggle,
    onClear,
}: ProjectFilterProps) {
    const isAllActive = selectedTags.length === 0;

    return (
        <div
            className={styles.filter}
            role="group"
            aria-label="Filter projects by technology"
        >
            <button
                type="button"
                className={
                    isAllActive
                        ? `${styles.filterButton} ${styles.filterButtonActive}`
                        : styles.filterButton
                }
                onClick={onClear}
                aria-pressed={isAllActive}
            >
                All
            </button>

            {technologies.map((tag) => {
                const isActive = selectedTags.includes(tag);

                return (
                    <button
                        key={tag}
                        type="button"
                        className={
                            isActive
                                ? `${styles.filterButton} ${styles.filterButtonActive}`
                                : styles.filterButton
                        }
                        onClick={() => onToggle(tag)}
                        aria-pressed={isActive}
                    >
                        {tag}
                    </button>
                );
            })}
        </div>
    );
}

export default ProjectFilter;
