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
        <div className="container bg-gray-blue h-screen relative justify-center text-center" >
            {/* <img src="./public/website.svg" className="h-16 w-16"></img> */}
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-oatmeal">Qianqian Wang</h1>
            <mark className="px-5 text-white text-3xl bg-dark-brown rounded">王倩倩</mark>
            <div className='flex flex-col absolute bottom-5 left-0 right-0'>
                {list.map((elem) => {
                    return (
                        <div key={elem.title} className="">
                            <div className="oatmeal">
                                {elem.icon}
                            </div>
                            <p className="font-bold">{elem.title}</p>
                        </div>
                    )
                })}
                <div className="pt-1">Designed by AW</div>
            </div>
        </div>
    )
}

export default Sidebar
