import styles from "./footer.module.scss";
import {Link} from "react-router-dom";
import {FC} from "react";

interface FooterProps {
    infoIsShowed: boolean
}

const Footer:FC<FooterProps> = ({infoIsShowed}) => {
    return (
        <div className={styles.footer}>
            <Link to={'/mySkills'} className={infoIsShowed ? styles.footerElementsMod : styles.footerElements}>Мои навыки</Link>
            <Link to={'/myProjects'} className={styles.footerElements}>Мои проекты</Link>
        </div>
    );
};

export default Footer;