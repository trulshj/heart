import styles from "../styles/Home.module.css";
import utilityStyles from "../styles/Utility.module.css";

function Home() {
    return (
        <div className={utilityStyles.container}>
            <div className={styles.infoWrapper}>
                <h3>Utvikler</h3>
                <h3>Bachelor i informatikk</h3>
            </div>
            <img
                className={styles.headshot}
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEN23wl30_4XQ/profile-displayphoto-shrink_800_800/0/1598609080694?e=1648684800&v=beta&t=rbVo3Y9pyKU7KDhIwq6nP8eIyhKd_jPjf65Y6kZrgGs"
                alt="Headshot"
            ></img>
            <div className={styles.projectLinksWrapper}>
                <ProjectLink href="https://license-your-stuff.netlify.app/">
                    License Your Stuff!
                </ProjectLink>
                <ProjectLink href="https://folk.ntnu.no/trulshj/SudokuINFT1003/sudoku.html">
                    Sudoku
                </ProjectLink>
                <ProjectLink href="https://www.adamflourishzine.com/">
                    Flourish
                </ProjectLink>
            </div>
        </div>
    );
}

function ProjectLink(props) {
    return (
        <a
            className={styles.projectLink}
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span>{props.children}</span>
            <span>&gt;</span>
        </a>
    );
}

export default Home;
