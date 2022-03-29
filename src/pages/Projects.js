import styles from "../styles/Projects.module.css";
import utilityStyles from "../styles/Utility.module.css";


const projectArray = [
    {
        name: "OFFLINE",
        link: "https://github.com/trulshj/offline2",
        about: "En statisk nettside laget med Next.js for et fanzine om serien 'SK8 the Infinity'",
    },
    {
        name: "Elden Ring Rune Calculator",
        link: "runes.truls.dev",
        about: "En kalkulator for hvor mange runes du trenger for å levle opp i Elden Ring",
    },
    {
        name: "License Your Stuff!",
        link: "https://license-your-stuff.netlify.app/",
        about: "Et verktøy for å sjekke hvilken type lisens du eller andre har på deres Github repos",
    },
];

function Projects() {
    return (
        <div className={utilityStyles.container}>
            {projectArray.length ? null : <h2>WIP!</h2>}
            <div className={styles.projectList}>
                {projectArray.map((project, idx) => (
                    <div className={styles.project} key={idx}>
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
