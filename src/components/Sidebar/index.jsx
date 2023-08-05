import React from "react"
import styles from "./index.module.scss"
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import SchoolIcon from "@mui/icons-material/School";
import LayersIcon from "@mui/icons-material/Layers";
import ChatIcon from "@mui/icons-material/Chat";

const Sidebar = () => {
    const list = [
        { title: "Home", icon: <HomeIcon /> },
        { title: "Resume", icon: <Person2Icon /> },
        { title: "Experience", icon: <SchoolIcon /> },
        { title: "Projects", icon: <LayersIcon /> },
        { title: "Contact", icon: <ChatIcon /> },
    ]
    return (
        <div className="font-Carter container bg-navy h-screen relative w-64 p-4" >
            <h1 className="mt-5 text-8xl">AW</h1>
            <div className='absolute bottom-16 justify-center'>
                {list.map((elem) => {
                    return (
                        <div key={elem.title} className="flex flex-row w-60 p-4">
                            <div className="purple inline-block basis-1/4">{elem.icon}</div>
                            <div className="font-bold text-xl inline-block basis-3/4 text-left">{elem.title}</div>
                        </div>
                    )
                })}
            </div>
            <div className="absolute text-right">© 2023 Amber Wang</div>
        </div>
    )
}

export default Sidebar
