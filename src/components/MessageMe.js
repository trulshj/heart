import styles from "../styles/MessageMe.module.css";

function MessageMe() {
    return (
        <div className={styles.container}>
            <span>
                Send meg gjerne en melding på{" "}
                <a href="mailto:post@truls.dev">post@truls.dev</a>!
            </span>
        </div>
    );
}

export default MessageMe;
