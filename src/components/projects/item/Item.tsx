import styles from './item.module.scss'


import { IProjectsArray } from '../../../pages/MyProjects/MyProjects';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";



const Item = ({title, image, description, linkToGitHub, linkToProject}: IProjectsArray) => {
    return (
        <div className={styles.item}>
            <a href={linkToProject} className={styles.leftSide}>
                <img src={image} alt={'react-shop'} />
            </a>
            <div className={styles.rightSide}>
                <a href={linkToProject} className={styles.title}>
                    <div>{title}</div>
                </a>
                <div className={styles.description}>{description}</div>
                <div className={styles.links}>
                    <a href={linkToGitHub}>
                        <FontAwesomeIcon icon={faGithub}  />
                    </a>
                    <a href={linkToProject}>View project</a>
                </div>
            </div>
            <div className={styles.weightBorder}></div>
        </div>
    );
};

export default Item;