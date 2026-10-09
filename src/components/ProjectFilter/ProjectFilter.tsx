import type { ProjectFilterValue, Technology } from '../../types/project';
import styles from './ProjectFilter.module.css';

type ProjectFilterProps = {
    technologies: Technology[];
    selectedFilter: ProjectFilterValue;
    onSelect: (filter: ProjectFilterValue) => void;
};

function ProjectFilter({
    technologies,
    selectedFilter,
    onSelect,
}: ProjectFilterProps) {
    const options: ProjectFilterValue[] = ['All', ...technologies];

    return (
        <div
            className={styles.filter}
            role="group"
            aria-label="Filtrera projekt efter teknik"
        >
            {options.map((option) => {
                const isActive = option === selectedFilter;

                return (
                    <button
                        key={option}
                        type="button"
                        className={
                            isActive
                                ? `${styles.filterButton} ${styles.filterButtonActive}`
                                : styles.filterButton
                        }
                        onClick={() => onSelect(option)}
                        aria-pressed={isActive}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
}

export default ProjectFilter;
