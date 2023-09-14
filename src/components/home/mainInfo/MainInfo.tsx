import styles from "./mainInfo.module.scss";
import avatar from "../../../assets/avatar.png";


const MainInfo = () => {
    return (
        <div className={styles.mainInfo}>
            <div className={styles.mainInfoLeft}>
                <h2>Привет,</h2>
                <h3>Я Ярослав,</h3>
                <h4>Я frontend developer и это моё портфолио</h4>
            </div>
            <div className={styles.mainInfoRight}>
                <img src={avatar} alt={'Image'} />
            </div>
        </div>
    );
};

export default MainInfo;