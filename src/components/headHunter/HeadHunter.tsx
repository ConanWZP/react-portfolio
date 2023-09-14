import styles from './headHunter.module.scss'

import icon from './../../assets/Front-transformed.svg'
import {useLocation} from "react-router-dom";

const HeadHunter = () => {

    const location = useLocation()

    return (
        <div className={`${styles.wrapper} ${location.pathname === '/myProjects' ? styles.topRight : styles.bottomRight}`}>
            <div className={styles.container}>
                <img className={styles.icon} src={icon} />
                <a href="https://hh.ru/resume/a5a438a3ff0c55a48c0039ed1f4f5074584335" className={styles.link}>
                    hh.ru
                </a>
            </div>
        </div>
    );
};

export default HeadHunter;