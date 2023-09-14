import {AiFillHtml5} from 'react-icons/ai'
import {BiLibrary, BiLogoReact} from "react-icons/bi";
import {SiJavascript, SiRedux, SiTailwindcss, SiTypescript} from 'react-icons/si'
import {FaSyncAlt, FaTools} from 'react-icons/fa'
import {TbJson} from 'react-icons/tb'
import styles from './mySkills.module.scss'
import Item from "../../components/skills/item/Item.tsx";
import {motion} from "framer-motion";


export interface IMockArray {
    technology: string,
    bottomInfo: string,
    image: any,
}

const mockArrayPrimary: IMockArray[] = [
    {
        technology: 'HTML + CSS',
        bottomInfo: `Семантика, SCSS, Адаптивная и Кросс-браузерная вёрстка`,
        image: <AiFillHtml5/>
    },
    /*{
        technology: 'CSS',
        bottomInfo: 'SCSS, Responsive design, Cross-browser development',
        image: <BiLogoCss3/>
    },*/
    {
        technology: 'JS',
        bottomInfo: 'Переменные, Объекты, Массивы, Функции, Циклы, ООП, ФП',
        image: <SiJavascript/>
    },
    {
        technology: 'React',
        bottomInfo: 'Компоненты, Хуки, Роутинг, SCSS модули',
        image: <BiLogoReact/>
    },
    {
        technology: 'Redux',
        bottomInfo: 'Redux Thunk, Redux ToolKit, RTK Query',
        image: <SiRedux/>
    },
    {
        technology: 'TS',
        bottomInfo: 'Примитивы, Объекты, Массивы, Интерфейсы, Extends, Generics, Utility Types',
        image: <SiTypescript/>
    },
]

const mockArraySecondary: IMockArray[] = [
    {
        technology: 'Async',
        bottomInfo: 'Axios, React Query (TanStack), RTK Query',
        image: <FaSyncAlt/>
    },
    {
        technology: 'Styles',
        bottomInfo: 'Tailwind, MUI, Antd',
        image: <SiTailwindcss/>
    },
    {
        technology: 'API Imitations',
        bottomInfo: 'Firebase, MockAPI, {JSON} Placeholder',
        image: <TbJson/>
    },
    {
        technology: 'Extra Libraries',
        bottomInfo: 'React Select, React Hook Form',
        image: <BiLibrary/>
    },
    {
        technology: 'Tools',
        bottomInfo: 'WebStorm, GitHub, DevTools',
        image: <FaTools/>
    },
]
const MySkills = () => {

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.items}>
                        <span>Основные навыки</span>
                        {
                            mockArrayPrimary.map((item, index) => (
                                <Item key={index} technology={item.technology} bottomInfo={item.bottomInfo}
                                      image={item.image}/>
                            ))
                        }
                    </div>

                    <div className={styles.items}>
                        <span>Дополнительные навыки</span>
                        {
                            mockArraySecondary.map((item, index) => (
                                <Item key={index} technology={item.technology} bottomInfo={item.bottomInfo}
                                      image={item.image}/>
                            ))
                        }
                    </div>

                </div>

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
};


export default MySkills