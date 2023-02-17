import { useState } from "react";
import utilityStyles from "../styles/Utility.module.css";
import styles from "../styles/ColorContrast.module.css";

function ColorContrast() {
    const [colorA, setColorA] = useState("#E61A6B");
    const [colorB, setColorB] = useState("#03DAC6");
    const [contrastRatio, setContrastRatio] = useState(
        calculateContrastRatio(colorA, colorB)
    );

    function hexToSRGB(channelHex) {
        const linearValue = parseInt(channelHex, 16) / 255;
        if (linearValue <= 0.03928) {
            return linearValue / 12.92;
        }

        return ((linearValue + 0.055) / 1.055) ** 2.4;
    }

    function calculateRelativeLuminance(colorHex) {
        const R = hexToSRGB(colorHex.slice(1, 3));
        const G = hexToSRGB(colorHex.slice(3, 5));
        const B = hexToSRGB(colorHex.slice(5, 7));

        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    }

    function calculateContrastRatio(a, b) {
        const luminanceA = calculateRelativeLuminance(a) + 0.05;
        const luminanceB = calculateRelativeLuminance(b) + 0.05;

        return luminanceA > luminanceB
            ? luminanceA / luminanceB
            : luminanceB / luminanceA;
    }

    function updateContrast() {
        setContrastRatio(calculateContrastRatio(colorA, colorB));
    }

    function updateColorA(e) {
        setColorA(e.currentTarget.value);
        updateContrast();
    }

    function updateColorB(e) {
        setColorB(e.currentTarget.value);
        updateContrast();
    }

    return (
        <div className={utilityStyles.container}>
            <h1>Kontrastkalkulator</h1>
            <div>
                <div className={styles.colorsWrapper}>
                    <div className={styles.colorContainer}>
                        <input
                            type="color"
                            name="colorA"
                            id="colorA"
                            value={colorA}
                            onChange={updateColorA}
                            className={styles.picker}
                        />
                        <input
                            type="text"
                            name="hexColorA"
                            id="hexColorA"
                            value={colorA}
                            onChange={updateColorA}
                            className={styles.hexInput}
                        />
                    </div>
                    <div className={styles.colorContainer}>
                        <input
                            type="color"
                            name="colorB"
                            id="colorB"
                            value={colorB}
                            className={styles.picker}
                            onChange={updateColorB}
                        />
                        <input
                            type="text"
                            name="hexColorA"
                            id="hexColorA"
                            value={colorB}
                            onChange={updateColorB}
                            className={styles.hexInput}
                            maxLength={7}
                        />
                    </div>
                </div>
            </div>
            <h3>
                Kontrast: <span>{contrastRatio.toFixed(2)}</span>
            </h3>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>👍?</th>
                        <th>WCAG AA</th>
                        <th>WCAG AAA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Vanlig Tekst</td>
                        <td>{contrastRatio >= 4.5 ? "✅" : "❌"}</td>
                        <td>{contrastRatio >= 7.1 ? "✅" : "❌"}</td>
                    </tr>
                    <tr>
                        <td>Stor Tekst</td>
                        <td>{contrastRatio >= 3.1 ? "✅" : "❌"}</td>
                        <td>{contrastRatio >= 4.5 ? "✅" : "❌"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ColorContrast;
