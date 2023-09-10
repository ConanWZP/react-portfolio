import {motion} from "framer-motion";
import styles from './myProjects.module.scss'
import Item from "../../components/projects/item/Item";
import shop from './../../assets/shop.png'
import estate from './../../assets/estate.png'

export interface IProjectsArray {
    title: string,
    description: string,
    image: string,
    linkToProject: string,
    linkToGitHub: string
}

const projectsArray: IProjectsArray[] = [
    {
        title: 'React Shop',
        description: 'sadfggggggggqwgsgfsdfg afsgsdfg sergsdxfg dsfg werfsdfsthdsfg sdfgqwafesdfhvbndsfg sdfhweshsdhg',
        image: shop,
        linkToGitHub: 'https://github.com/ConanWZP/react-shop',
        linkToProject: 'https://react-shop-one-mu.vercel.app'
    },
    {
        title: 'React Estate',
        description: 'Description Description Description Description Description Description',
        image: estate,
        linkToGitHub: 'https://github.com/ConanWZP/react-estate',
        linkToProject: 'https://react-estate-two.vercel.app'
    },
]
const MyProjects = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {
                        projectsArray.map((project, index) => (
                            <Item key={index} title={project.title}
                                  description={project.description} image={project.image}
                                  linkToProject={project.linkToProject}
                                  linkToGitHub={project.linkToGitHub} />
                        ))
                    }

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


export default MyProjects
