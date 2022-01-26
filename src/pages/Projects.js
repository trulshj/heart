import styles from "../styles/Projects.module.css";
import utilityStyles from "../styles/Utility.module.css";

/*
const projectArray = [
    {
        name: "eple",
        link: "https://github.com/trulshj",
        about: "Et lite prosjekt om epler lorem ipsum dolor sit amet",
    },
];
*/

const projectArray = [];

function Projects() {
    return (
        <div className={utilityStyles.container}>
            {projectArray.length ? null : <h2>WIP!</h2>}
            <div className={styles.projectList}>
                {projectArray.map((project) => (
                    <div className={styles.project} key={project.name}>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {project.name}
                        </a>
                        <p>{project.about}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
