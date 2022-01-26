import { Link } from "react-router-dom";

import utilityStyles from "../styles/Utility.module.css";

function NoPage() {
    return (
        <div className={utilityStyles.container}>
            <h2>
                Oh no, <span style={{ color: "var(--accent)" }}>404</span>!
            </h2>
            <span>
                Klikk <Link to="/">her</Link> for å komme hjem igjen
            </span>
        </div>
    );
}

export default NoPage;
