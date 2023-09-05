import './App.scss'
import HomePage from "./pages/HomePage/HomePage.tsx";
import {Route, Routes, useLocation} from "react-router-dom";
import Header from "./components/header/Header.tsx";
import MyProjects from "./pages/MyProjects/MyProjects.tsx";
import MySkills from "./pages/MySkills/MySkills.tsx";
import {AnimatePresence} from "framer-motion";
import {createContext, useEffect, useState} from "react";


interface InfoContextTypes {
    infoIsShowed: boolean,
    setInfoIsShowed: React.Dispatch<React.SetStateAction<boolean>>
}

export const InfoContext = createContext<InfoContextTypes>({
    infoIsShowed: false,
    setInfoIsShowed:  (_value: (((prevState: boolean) => boolean) | boolean)) => {}
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
                <Header />
                <AnimatePresence mode={'wait'}>
                    <Routes key={location.pathname} location={location}>
                        <Route path={'/'} element={<HomePage  />}/>
                        <Route path={'/mySkills'} element={<MySkills/>}/>
                        <Route path={'/myProjects'} element={<MyProjects/>}/>
                    </Routes>
                </AnimatePresence>
            </div>
            </InfoContext.Provider>

    )
}

export default App
