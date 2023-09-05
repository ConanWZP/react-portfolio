
import styles from './header.module.scss'
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {InfoContext} from "../../App.tsx";




const Header = () => {

    const navigate = useNavigate()
    const {infoIsShowed} = useContext(InfoContext)

    return (
        <header className={styles.header}>
            <div className={`${infoIsShowed && styles.whiteText}`}>
                JX
            </div>
            <div onClick={() => navigate('/')}><span className={`${infoIsShowed && styles.whiteTextSpan}`}>Ho</span><span>me</span></div>
            <div></div>
        </header>
    );
};

export default Header;