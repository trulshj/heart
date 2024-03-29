import styles from "../styles/Layout.module.css";
import { Outlet, Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Layout() {
    return (
        <div className={styles.container}>
            <DarkModeToggle />
            <header className={styles.header}>
                <h1 className={styles.title}>Truls Henrik</h1>
                <div className={styles.headerSide + " " + styles.left}>
                    <Link to="/">/home</Link>
                    <Link to="/about">/about</Link>
                    <Link to="/projects">/projects</Link>
                </div>
                <div className={styles.headerSide + " " + styles.right}>
                    <a
                        href="https://github.com/trulshj"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github
                    </a>
                    <a
                        href="https://twitter.com/tallteacup"
                        target="_blank"
                        rel="noreferrer"
                    >
                        twitter
                    </a>
                    <a
                        href="https://www.linkedin.com/in/trulshj/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        linkedin
                    </a>
                </div>
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
