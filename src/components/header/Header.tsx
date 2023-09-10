
import styles from './header.module.scss'
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {InfoContext} from "../../App.tsx";




const Header = () => {

    const navigate = useNavigate()
    const {infoIsShowed} = useContext(InfoContext)



    return (
        <div className={`${styles.header} ${!infoIsShowed && styles.headerBackground}`}>
            <div className={`${infoIsShowed && styles.whiteText}`}>
                JX
            </div>
            <div>
                <div onClick={() => navigate('/')}>
                    <span className={`${infoIsShowed && styles.whiteTextSpan}`}>Ho</span>
                    <span className={`${infoIsShowed && styles.whiteTextSpanSecond}`}>me</span>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Header;