import styles from "./button.module.scss";
import {FC} from "react";
import {InfoContextTypes} from "../../../App.tsx";


const Button:FC<Pick<InfoContextTypes, 'infoIsShowed' | 'setInfoIsShowed'>> = ({infoIsShowed, setInfoIsShowed}) => {
    return (
        <div className={`${styles.btnWrapper} ${infoIsShowed ? styles.moveBtnToTopRight : styles.moveBtnToCenter}`}>
            <button className={`${infoIsShowed ? styles.smallBtn : styles.pulsedButton}`}
                    onClick={() => setInfoIsShowed((prevState) => !prevState)}>
                {infoIsShowed ? 'Нажмите' : 'Нажмите'}
            </button>
        </div>
    );
};

export default Button;