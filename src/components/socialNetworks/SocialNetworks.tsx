import styles from './socialNetworks.module.scss'
// import {BsGithub, BsTelegram} from 'react-icons/bs'
// import VkIcon from "../VkIcon.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'
import {FC} from "react";

interface SocialNetworksProps {
    infoIsShowed: boolean
}

const SocialNetworks:FC<SocialNetworksProps> = ({infoIsShowed}) => {
    return (
        <div className={styles.wrapper}>
            <a href={'https://vk.com/c.yaroslav'} className={`${infoIsShowed && styles.whiteIcons}`}>
                 <FontAwesomeIcon icon={faVk}  />
                {/*<VkIcon />*/}
            </a>
            <a href={'https://github.com/ConanWZP'} className={`${infoIsShowed && styles.whiteIcons}`}>
               {/* <FontAwesomeIcon icon={faGithub} style={{color: "white",}} />*/}
                {/*<BsGithub />*/}
                <FontAwesomeIcon icon={faGithub}  />
            </a>
            {/*<div className={styles.vk}>
                <Icon32LogoVk className={styles.vk} />
            </div>*/}
            <a href={'https://t.me/JarixWZP'} className={`${infoIsShowed && styles.whiteIcons}`}>
                {/*<FontAwesomeIcon icon={faTelegram} style={{color: "white",}} />*/}
               {/* <BsTelegram />*/}
                <FontAwesomeIcon icon={faTelegram}  />
            </a>

            <span className={`${infoIsShowed && styles.whiteLine}`}></span>
        </div>
    );
};

export default SocialNetworks;