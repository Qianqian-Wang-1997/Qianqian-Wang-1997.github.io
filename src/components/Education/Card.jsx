import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from "react";

export function Card({ name, startDate, endDate, location, degree, major, courses, others, logo }) {
    let showDate = (date) => {
        return new Date(date).toLocaleString(
            'en-US',
            { timeZone: 'UTC', month: 'short', year: 'numeric' })
    }
    const [showMore, setShowMore] = useState(false)
    return (
        <div className="p-5  m-5 rounded-lg text-purple
        bg-stone-50/50 hover:bg-stone-100 transition-all ease-in-out
        drop-shadow-2xl">
            <div className="pb-4">
                <div className='flex'>
                    <div className="w-3/4 pl-5 justify-center my-auto text-xs sm:text-base md:text-lg lg:text-xl">
                        <h2 className="font-Carter text-xl">{name}</h2>
                        <div className="">
                            <div className="inline-block">
                                <FontAwesomeIcon icon={faLocationDot} className="px-2 inline-block" />
                                <p className="inline-block">{location}</p>
                            </div>
                            <p className="inline-block px-5">
                                {showDate(startDate)} - {showDate(endDate)}
                            </p>
                        </div>
                        <p className="">{degree}</p>
                        <p>{major}</p>
                    </div>
                    <img src={`/assets/brand/${logo}.jpg`}
                        className="hidden sm:block w-32 h-32 object-contain rounded-full border-purple-200 border-4 drop-shadow-2xl" />
                </div>

            </div>

            <div className='px-5 opacity-70'>
                {
                    courses.length !== 0 && (
                        <div>
                            <button onClick={() => { setShowMore(!showMore) }}
                                className="font-Carter mb-2 px-3 rounded-xl hover:bg-light-blue hover:text-white transition-all ease-in-out">
                                <p className='inline-block'>Related Courses</p>
                                {!showMore ?
                                    <ExpandMoreIcon className="h-5 inline-block" /> :
                                    <ExpandLessIcon className="h-5 inline-block" />}
                            </button>
                            <ul className={`text-left text-sm list-disc list-inside
                                ${showMore ? "h-16" : "h-0"} transition-all delay-150 duration-300 overflow-auto `}>
                                {
                                    courses.map((ele) => {
                                        return (<li key={ele.title}>{ele.id}: {ele.title}</li>)
                                    })
                                }
                            </ul>
                        </div>
                    )
                }
                {others && <p className="text-sm text-zinc-700">* {others}</p>}
            </div>
        </div>
    )
}

