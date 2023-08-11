import React from "react"
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import SchoolIcon from "@mui/icons-material/School";
import LayersIcon from "@mui/icons-material/Layers";
import ChatIcon from "@mui/icons-material/Chat";

const Sidebar = () => {
    const list = [
        { title: "About", icon: <HomeIcon /> },
        { title: "Experience", icon: <Person2Icon /> },
        { title: "Education", icon: <SchoolIcon /> },
        { title: "Projects", icon: <LayersIcon /> },
        { title: "Contact", icon: <ChatIcon /> },
    ]
    return (
        <div className="font-Carter container bg-navy h-screen relative p-4 " >
            <a className="mx-auto mt-5 text-base sm:text-xl md:text-7xl lg:text-8xl ease-in-out duration-300 hover:text-white text-amber-300"
             href="#About">AW</a>
            <div className="absolute bottom-10 mx-auto">
                    {list.map((elem) => {
                        return (
                            <a href={`#${elem.title}`} key={elem.title} >
                                <div className="flex flex-row py-2 hover:text-amber-300">
                                    <div className="purple inline-block basis-1/4 ">{elem.icon}</div>
                                    <div className="basis-3/4 text-left text-xl
                                    sm:px-1 md:px-2 lg:px-3
                                    hidden sm:hidden md:inline-block lg:inline-block 
                                    ">{elem.title}</div>
                                </div>
                            </a>
                        )
                    })}
                <div className="left-0 pt-2 text-xs hidden sm:hidden md:block lg:block">© 2023 Amber Wang</div>
            </div>

        </div>
    )
}

export default Sidebar
