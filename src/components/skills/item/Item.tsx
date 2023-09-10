import styles from "./item.module.scss";
import {FC} from "react";
import {IMockArray} from "../../../pages/MySkills/MySkills.tsx";



const Item:FC<IMockArray> = ({technology, bottomInfo, image}) => {
    return (
        <div className={styles.item}>
            <div className={styles.wrapperItem}>
            <div className={styles.itemTop}>
                {image}
                <div className={styles.technology}>{technology}:</div>
            </div>
            <div className={styles.itemBottom}>
                {bottomInfo}
            </div>
            </div>
        </div>
    );
};

export default Item;