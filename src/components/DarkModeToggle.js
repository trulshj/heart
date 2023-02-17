import React, {useState } from "react";
import styles from "../styles/DarkModeToggle.module.css";


function DarkModeToggle() {
    const [isDark, setIsDark] = useState(true);
    const [icon, setIcon] = useState("🌙");

    return (
        <button className={styles.darkModeButton} onClick={() => {isDark ? setIcon("🌞") : setIcon("🌚"); setIsDark(!isDark)}}>{icon}</button>
    )
}

export default DarkModeToggle