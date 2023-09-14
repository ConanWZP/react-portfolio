import './App.scss'
import HomePage from "./pages/HomePage/HomePage.tsx";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Header from "./components/header/Header.tsx";
import MyProjects from "./pages/MyProjects/MyProjects.tsx";
import MySkills from "./pages/MySkills/MySkills.tsx";
import {AnimatePresence} from "framer-motion";
import {createContext, useEffect, useState} from "react";
import SocialNetworks from "./components/socialNetworks/SocialNetworks.tsx";
import HeadHunter from "./components/headHunter/HeadHunter.tsx";



export interface InfoContextTypes {
    infoIsShowed: boolean,
    setInfoIsShowed: React.Dispatch<React.SetStateAction<boolean>>
}

export const InfoContext = createContext<InfoContextTypes>({
    infoIsShowed: false,
    setInfoIsShowed: (_value: (((prevState: boolean) => boolean) | boolean)) => {
    }
})

function App() {


    const [infoIsShowed, setInfoIsShowed] = useState(false)
    const location = useLocation();

    useEffect(() => {
        setInfoIsShowed(false)
    }, [location])


    return (
        <InfoContext.Provider value={{infoIsShowed, setInfoIsShowed}}>

            <div className={`layout`}>

                <AnimatePresence mode={'wait'}>
                    <Routes key={`${location.pathname}`} location={location}>
                        <Route path={'/'} element={<HomePage/>}/>
                        <Route path={'/mySkills'} element={<MySkills/>}/>
                        <Route path={'/myProjects'} element={<MyProjects/>}/>
                        <Route path={'*'} element={<Navigate to={'/'}/>}/>
                    </Routes>
                    <Header key={`${location.pathname}1`}/>
                    <HeadHunter key={`${location.pathname}2`} />
                    <SocialNetworks key={`${location.pathname}3`} infoIsShowed={infoIsShowed}/>
                </AnimatePresence>

            </div>

        </InfoContext.Provider>

    )
}

export default App
