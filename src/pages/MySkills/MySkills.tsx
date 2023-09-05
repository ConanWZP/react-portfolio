
import styles from './mySkills.module.scss'
import Transition from "../../Transition.tsx";

export const MySkills = () => {
    return (
        <div className={styles.wrapper}>
            Skill
        </div>
    );
};

const WrappedMySkills = Transition(MySkills)

export default WrappedMySkills;