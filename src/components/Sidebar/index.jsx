import React from "react"
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'

import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import SchoolIcon from "@mui/icons-material/School";
// import LayersIcon from "@mui/icons-material/Layers";
// import ChatIcon from "@mui/icons-material/Chat";
// import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LoginIcon from '@mui/icons-material/Login';

const Sidebar = () => {
    const list = [
        { title: "About", icon: <HomeIcon /> },
        { title: "Experience", icon: <Person2Icon /> },
        { title: "Education", icon: <SchoolIcon /> },
        // { title: "Projects", icon: <LayersIcon /> },
        // { title: "Contact", icon: <ChatIcon /> },
        // { title: "Life Calendar", icon: <BookmarksIcon /> },
    ]
    return (
        <div className="font-Carter container bg-navy h-screen relative p-4" >
            <p className="mx-auto mt-5 text-base sm:text-xl md:text-7xl lg:text-8xl ease-in-out duration-300 hover:text-white text-amber-300">AW</p>
            <div className="flex flex-col text-center">
                <Link to="/login">
                    <button className="btn">
                        <LoginIcon className="purple inline-block basis-1/6" />
                        <p className="screen-pd-size screen-hide-text">Login</p>
                    </button>
                </Link>
                <Link to="/sign-up">
                    <button className="block underline underline-offset-1 mx-auto screen-text-size">Sign up</button>
                </Link>
            </div>
            <div className="absolute bottom-10 mx-auto">
                {list.map((elem) => {
                    return (
                        <HashLink to={`/#${elem.title}`} key={elem.title} >
                            <div className="flex flex-row py-2 hover:text-amber-300">
                                <div className="purple inline-block basis-1/4 ">{elem.icon}</div>
                                <div className="basis-3/4 text-left text-xl
                                    screen-pd-size screen-hide-text
                                    ">{elem.title}</div>
                            </div>
                        </HashLink>
                    )
                })}
                <div className="left-0 pt-2 text-xs hidden sm:hidden md:block lg:block">© 2023 Amber Wang</div>
            </div>

        </div>
    )
}

export default Sidebar
