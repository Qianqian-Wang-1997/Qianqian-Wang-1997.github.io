import React from "react"
import ReactTypingEffect from "react-typing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faAngleDoubleDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import styles from "./index.module.scss"

const About = () => {
    const contact = [
        { icon: faGithub, url: "https://github.com/Qianqian-Wang-1997" },
        { icon: faLinkedin, url: "https://www.linkedin.com/in/qianqian-wang-1425341b4/" },
        // { icon: faEnvelope, url: "https://github.com/Qianqian-Wan" },
    ]
    return (
        <div className="w-full min-h-screen bg-purple p-8 relative" id="About">
            <img className="bg-[url('/assets/madder-ross.jpg')] 
            hover:bg-[url('/assets/mad-ross.jpeg')] bg-cover 
            w-32 h-32 hover:w-40 hover:h-40 
            rounded-full border-4 mx-auto 
            ease-in-out duration-300"></img>
            <p className="font-Carter mb-4 text-bold text-5xl font-extrabold text-white 
            pb-4 pt-4">Amber Wang</p>

            {/* Google map */}
            <FontAwesomeIcon icon={faLocationDot} className="pr-2 h-5 inline-block" />
            <p className="inline-block pb-4">Ontario, Canada</p>

            {/* Tag */}
            <p>
                <ReactTypingEffect
                    // Text to be typed
                    text={["Developer", "Daydreamer", "Mad Ross"]}
                    typingDelay="1000"
                    speed="80"
                    eraseDelay="1500"
                    eraseSpeed="80"
                />
            </p>

            {/* Social links */}
            <div className="mx-auto pt-4">
                {
                    contact.map(ele => {
                        return (
                            <a href={ele.url} target="blank" key={ele.url}>
                                <FontAwesomeIcon icon={ele.icon} className="p-2 h-7 hover:text-amber-300" />
                            </a>
                        )
                    })
                }
            </div>
            <a href="#Experience">
                <FontAwesomeIcon icon={faAngleDoubleDown} className="absolute p-2 h-7 bottom-10 hover:text-amber-300" />
            </a>
        </div>
    )
}

export default About
