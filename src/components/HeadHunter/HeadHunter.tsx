import styles from './headHunter.module.scss'
import FrontendIcon from "./svg/FrontendIcon.tsx";
import icon from './../../assets/Front-transformed.svg'

const HeadHunter = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
               {/* <FrontendIcon className={styles.icon} />*/}
                <img className={styles.icon} src={icon} />
                <a href="https://hh.ru/resume/a5a438a3ff0c55a48c0039ed1f4f5074584335" className={styles.link}>
                    hh.ru
                </a>
            </div>
        </div>
    );
};

export default HeadHunter;