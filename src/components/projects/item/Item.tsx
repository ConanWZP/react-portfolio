import styles from './item.module.scss'


import { IProjectsArray } from '../../../pages/MyProjects/MyProjects';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faYoutube} from "@fortawesome/free-brands-svg-icons";



const Item = ({title, image, description, usedTechnologies, linkToGitHub, linkToProject, linkToYouTube}: IProjectsArray) => {


   // console.log(<b>Be</b>.props)
   // const textArray = description.split(substr)




    return (
        <div className={styles.item}>
            <a href={linkToProject} target="_blank" className={styles.leftSide}>
                <img src={image} alt={'react-shop'} />
            </a>
            <div className={styles.rightSide}>
                <a href={linkToProject} target="_blank" className={styles.title}>
                    <div>{title}</div>
                </a>
                <div className={styles.description}>
                    <p>{description}</p>
                    <p>Использованные технологии: {usedTechnologies}</p>
                </div>
                <div className={styles.links}>
                    <a href={linkToGitHub} target="_blank">
                        <FontAwesomeIcon icon={faGithub}  />
                    </a>
                    <a href={linkToProject} target="_blank">Открыть проект</a>
                    <a href={linkToYouTube} target="_blank">
                        <FontAwesomeIcon icon={faYoutube}  />
                    </a>
                </div>
            </div>
            <div className={styles.weightBorder}></div>
        </div>
    );
};

export default Item;