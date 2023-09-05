import styles from './homePage.module.scss'
import {FaReact} from 'react-icons/fa'
import SocialNetworks from "../../components/socialNetworks/SocialNetworks.tsx";
import HeadHunter from "../../components/HeadHunter/HeadHunter.tsx";
import { Link } from 'react-router-dom';
import Transition from "../../Transition.tsx";
import {useContext} from "react";
import { InfoContext } from '../../App.tsx';
import avatar from './../../assets/avatar.png'



function HomePage() {

   // const [infoIsShowed, setInfoIsShowed] = useState(false)
    const {infoIsShowed, setInfoIsShowed} = useContext(InfoContext)


    return (
        <div className={styles.wrapper}>
            {/*<header className={styles.header}>
                <div>JX</div>
                <div>Home</div>

            </header>*/}

            <HeadHunter />
            <div className={infoIsShowed ? styles.leftSideShowed : styles.leftSideHidden}></div>
            <div className={styles.mainSection}>
                {
                    infoIsShowed ?
                        <>
                            <div className={styles.mainInfo}>
                                <div className={styles.mainInfoLeft}>
                                    <h2>Hi,</h2>
                                    <h3>I'm Yaroslav</h3>
                                </div>
                                <div className={styles.mainInfoRight}>
                                    <img src={avatar} alt={'Image'} />
                                </div>
                            </div>

                        </>


                    : null

                }
                <div className={`${styles.btnWrapper} ${infoIsShowed ? styles.moveBtnToTopRight : styles.moveBtnToCenter}`}>
                    {/*<div className={styles.reactLogo}>
                                <FaReact />
                            </div>*/}

                    <button className={`${infoIsShowed ? styles.smallBtn : styles.pulsedButton}`}
                            onClick={() => setInfoIsShowed((prevState) => !prevState)}>
                        {infoIsShowed ? 'Close info' : 'Show info'}
                    </button>

                </div>

            </div>
            <div c></div>
            <SocialNetworks infoIsShowed={infoIsShowed} />
            <div className={styles.footer}>
                <Link to={'/mySkills'} className={infoIsShowed ? styles.footerElementsMod : styles.footerElements}>My Skills</Link>
                <Link to={'/myProjects'} className={styles.footerElements}>My Projects</Link>
            </div>
        </div>
    );
}

const WrappedHomePage = Transition(HomePage)
export default WrappedHomePage;