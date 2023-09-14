import {motion} from "framer-motion";
import styles from './myProjects.module.scss'
import Item from "../../components/projects/item/Item";
import shop from './../../assets/shop.png'
import estate from './../../assets/estate.png'
import search from './../../assets/search.png'
import portfolio from './../../assets/portfolio.png'
import chat from './../../assets/chat.png'
import recipes from './../../assets/recipes.png'
import pomodoro from './../../assets/pomodoro.png'
import calendar from './../../assets/calendar.png'
import todo from './../../assets/todo.png'
import pizza from './../../assets/pizza.png'
import weather from './../../assets/weather.png'

export interface IProjectsArray {
    title: string,
    description: string,
    usedTechnologies: string,
    image: string,
    linkToProject: string,
    linkToGitHub: string,
    linkToYouTube: string
}

const projectsArray: IProjectsArray[] = [
    {
        title: 'React Shop',
        description: `Интернет-магазин. Товары могут быть отфильтрованы по категориям, брендам и цене.
         Также присутствует поиск и сортировка товаров. Реализована админ панель для добавления/редактирования
          товаров и для отслеживания статистики. Весь функционал продемонстрирован в видео`,
        usedTechnologies: `React, Redux ToolKit, TS, Tailwind, Firebase, Axios, Leaflet. Для имитации оплаты использован Stripe`,
        image: shop,
        linkToGitHub: 'https://github.com/ConanWZP/react-shop',
        linkToProject: 'https://react-shop-one-mu.vercel.app',
        linkToYouTube: 'https://www.youtube.com/watch?v=WLI8uoSHwRs'
    },
    {
        title: 'Portfolio',
        description: `Веб портфолио, в котором представлены мои навыки, основные проекты и все необходимые ссылки. Весь функционал продемонстрирован в видео.`,
        usedTechnologies: `React, TS, SCSS`,
        image: portfolio,
        linkToGitHub: 'https://github.com/ConanWZP/react-portfolio',
        linkToProject: 'https://react-portfolio-six-mauve.vercel.app',
        linkToYouTube: 'https://www.youtube.com/watch?v=PVA-20wFVbM'
    },
    {
        title: 'React Estate',
        description: `Сервис для продажи и сдачи в аренду жилья. Созданное вами объявление можно редактировать. 
        Есть возможность для связи с владельцем. Весь функционал продемонстрирован в видео.`,
        usedTechnologies: `React, Redux ToolKit, TS, SCSS, Firebase, Axios, Leaflet, Tailwind`,
        image: estate,
        linkToGitHub: 'https://github.com/ConanWZP/react-estate',
        linkToProject: 'https://react-estate-two.vercel.app',
        linkToYouTube: 'https://www.youtube.com/watch?v=ZS4Jgg5R9xI'
    },
    {
        title: 'Search System',
        description: `Поисковая система с возможностью поиска изображений, видео и новостей. 
        Присутствует как светлая, так и тёмная тема. Весь функционал продемонстрирован в видео.`,
        usedTechnologies: `React, TS, Axios, Tailwind`,
        image: search,
        linkToGitHub: 'https://github.com/ConanWZP/google-search-clone',
        linkToProject: 'https://seek-everything.netlify.app',
        linkToYouTube: 'https://www.youtube.com/watch?v=QQ7TcVL--Xo'
    },
    {
        title: 'Firebase Chat',
        description: `Чат с возможностью обмениваться не только сообщениями, но и изображениями. 
        Также можно установить аватар. Весь функционал продемонстрирован в видео.`,
        usedTechnologies: `React, Redux ToolKit, TS, Firebase, SCSS`,
        image: chat,
        linkToGitHub: 'https://github.com/ConanWZP/firebase-chat-advanced',
        linkToProject: 'https://firebase-chat-advanced.vercel.app',
        linkToYouTube: 'https://www.youtube.com/watch?v=xrvHZUIdes8'
    },
    {
        title: 'Recipe Catalog',
        description: `Сайт для поиска рецептов. Рецепты отфильтрованы по категориями, внутри каждой категории можно искать по названию.
         Есть возможность генерации случайного рецепта. Также можно искать рецепты по необходимым ингредиентам.
          Весь функционал продемонстрирован в видео.`,
        usedTechnologies: `React, Redux ToolKit, TS, Axios, SCSS`,
        image: recipes,
        linkToGitHub: 'https://github.com/ConanWZP/recipe-catalog',
        linkToProject: 'https://recipe-catalog.vercel.app',
        linkToYouTube: 'https://www.youtube.com/watch?v=x-gfq69C7qY'
    },
    {
        title: 'React Weather',
        description: `Быстрый поиск погоды по названию города, поиск работает как на русском, так и на английском языке.
          Весь функционал продемонстрирован в видео.`,
        usedTechnologies: `React, TS, Axios, SCSS`,
        image: weather,
        linkToGitHub: 'https://github.com/ConanWZP/react-weather',
        linkToProject: 'https://react-weather-smoky-rho.vercel.app',
        linkToYouTube: 'https://www.youtube.com/watch?v=vDBRWGgJv-8'
    },
    {
        title: 'Pomodoro',
        description: `Pomodoro таймер с возможностью настройки времени работы и времени перерыва. Присутствие звуковое оповещение.
          Весь функционал продемонстрирован в видео.`,
        usedTechnologies: `React, TS, SCSS`,
        image: pomodoro,
        linkToGitHub: 'https://github.com/ConanWZP/pomodoro',
        linkToProject: 'https://pomodoro-mu-pearl.vercel.app',
        linkToYouTube: 'https://www.youtube.com/watch?v=_fUO8NucezE'
    },
    {
        title: 'Event Calendar',
        description: `Календарь событий, в котором можно назначать дату события, 
        описание и выбирать пользователя, которому это событие также будет показано. 
        (Данные для тестирования: логины: admin, user, Jarix, пароль у всех 123).
          Весь функционал продемонстрирован в видео.`,
        usedTechnologies: `React, TS, ANTD`,
        image: calendar,
        linkToGitHub: 'https://github.com/ConanWZP/advanced-react',
        linkToProject: 'https://advanced-react-ten.vercel.app',
        linkToYouTube: 'https://www.youtube.com/watch?v=ClH4svopU4o'
    },
    {
        title: 'React Pizza',
        description: `Сайт пиццерии. Пиццы могут быть отфильтрованы по категориям, 
        отсортированы по цене/популярности/алфавиту. Также имеется поиск по названию. Весь функционал продемонстрирован в видео.`,
        usedTechnologies: `React, Redux ToolKit, TS, Axios, SCSS`,
        image: pizza,
        linkToGitHub: 'https://github.com/ConanWZP/Pizza',
        linkToProject: 'https://pizza-conanwzp.vercel.app',
        linkToYouTube: 'https://www.youtube.com/watch?v=aQxv7iywN1M'
    },
    {
        title: 'ToDo List',
        description: `Первый самостоятельный проект - ToDo List с подключением к API, 
        в котором есть возможность создания до 10 задач, в каждой из которой может быть до 100 подзадач. 
        (Email: free@samuraijs.com Password: free) Весь функционал продемонстрирован в видео.`,
        usedTechnologies: `React + React Legacy, Redux, Axios`,
        image: todo,
        linkToGitHub: 'https://github.com/ConanWZP/todo-list',
        linkToProject: 'https://todo-list-mhsv.vercel.app',
        linkToYouTube: 'https://www.youtube.com/watch?v=inZxKxsyz9k'
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
                                  description={project.description} usedTechnologies={project.usedTechnologies}
                                  image={project.image} linkToProject={project.linkToProject}
                                  linkToGitHub={project.linkToGitHub} linkToYouTube={project.linkToYouTube} />
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
