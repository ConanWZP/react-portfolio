import styles from "./mainInfo.module.scss";
import avatar from "../../../assets/avatar.png";


const MainInfo = () => {
    return (
        <div className={styles.mainInfo}>
            <div className={styles.mainInfoLeft}>
                <h2>Hi,</h2>
                <h3>I'm Yaroslav</h3>
                <h4>I'm frontend developer and this is my portfolio</h4>
            </div>
            <div className={styles.mainInfoRight}>
                <img src={avatar} alt={'Image'} />
            </div>
        </div>
    );
};

export default MainInfo;