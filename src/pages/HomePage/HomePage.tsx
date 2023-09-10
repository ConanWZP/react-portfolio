import styles from './homePage.module.scss'

import {useContext} from "react";
import { InfoContext } from '../../App.tsx';
import MainInfo from "../../components/home/mainInfo/MainInfo.tsx";
import Footer from "../../components/home/footer/Footer.tsx";
import Button from "../../components/home/button/Button.tsx";
import {motion} from "framer-motion";



function HomePage() {

    const {infoIsShowed, setInfoIsShowed} = useContext(InfoContext)


    return (
        <>
        <div className={styles.wrapper}>
            <div className={infoIsShowed ? styles.leftSideShowed : styles.leftSideHidden}></div>
            <div className={styles.mainSection}>
                {/*<div className={styles.reactLogo}>
                                <FaReact />
                            </div>*/}
                { infoIsShowed ? <MainInfo /> : null }
                <Button infoIsShowed={infoIsShowed} setInfoIsShowed={setInfoIsShowed} />
            </div>
            <Footer infoIsShowed={infoIsShowed} />
        </div>
    <motion.div
        className={'slide-in'}
        initial={{scaleY: 0}}
        animate={{scaleY: 0}}
        exit={{scaleY: 1}}
        transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5}}
    />
    <motion.div
        className={'slide-out'}
        initial={{scaleY: 1}}
        animate={{scaleY: 0}}
        exit={{scaleY: 0}}
        transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
    />
</>
    );
}


export default HomePage