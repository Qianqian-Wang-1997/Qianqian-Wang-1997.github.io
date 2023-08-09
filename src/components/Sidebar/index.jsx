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
        <div className="font-Carter container bg-navy h-screen relative w-64 p-4 " >
            <h1 className="mt-5 text-8xl ease-in-out duration-300 hover:text-white text-amber-300">AW</h1>
            <div className="absolute bottom-10">
                <div className='mx-auto'>
                    {list.map((elem) => {
                        return (
                            <a href={`#${elem.title}`} key={elem.title} >
                                <div className="flex flex-row p-4 hover:text-amber-300">
                                    <div className="purple inline-block basis-1/4 pr-3">{elem.icon}</div>
                                    <div className="font-bold text-xl inline-block basis-3/4 text-left ">{elem.title}</div>
                                </div>
                            </a>
                        )
                    })}
                </div>
                <div className="left-0 pt-2 text-xs">© 2023 Amber Wang</div>
            </div>

        </div>
    )
}

export default Sidebar
