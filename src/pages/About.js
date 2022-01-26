import MessageMe from "../components/MessageMe";
import styles from "../styles/About.module.css";
import utilityStyles from "../styles/Utility.module.css";

function About() {
    return (
        <div className={utilityStyles.container}>
            <p className={styles.p}>
                Heisann, som du sikkert har forstått er jeg Truls Henrik! Jeg
                har drevet med progging siden 2015, og jobber for tiden som
                utvikler i{" "}
                <a
                    href="https://www.visma.no/om-visma/selskaper-i-visma/visma-real-estate/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visma Real Estate
                </a>
            </p>
            <p className={styles.p}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                ad, nam aspernatur accusantium voluptas earum aliquam cumque,
                vel unde cum eos hic dolore blanditiis mollitia impedit. Ipsa
                officia nobis totam.
            </p>
            <MessageMe />
        </div>
    );
}

export default About;
