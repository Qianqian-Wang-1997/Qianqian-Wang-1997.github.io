import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, } from "@fortawesome/free-solid-svg-icons";
import { faGithub, 
    // faSquareJs 
} from "@fortawesome/free-brands-svg-icons";

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from "react";

export function Card({ title, companyName, startDate, endDate, location, locationType, employmentType, jobs, others, logo }) {
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
                        <h2 className="font-Carter">{companyName} - {title} </h2>
                        <div>
                            <div className="inline-block">
                                <FontAwesomeIcon icon={faLocationDot} className="px-2 inline-block" />
                                <p className="inline-block">{location}</p>
                            </div>
                            <p className="inline-block px-5">
                                {showDate(startDate)} - {showDate(endDate)}
                            </p>
                        </div>
                    </div>
                    <img src={`/assets/company/${logo}.jpg`}
                        className="hidden sm:block w-32 h-32 object-contain rounded-full border-purple-200 border-4 drop-shadow-2xl" />
                </div>

            </div>

            <div className='px-5 opacity-70'>
                <div>
                    <button onClick={() => { setShowMore(!showMore) }}
                        className="mb-2 px-3 rounded-xl font-Carter">
                        <p className='inline-block'>Description</p>
                    </button>
                    <ul className={`text-left text-sm list-disc list-inside transition-all delay-150 duration-300 ease-in-out`}>
                        {
                            jobs.map((ele) => {
                                return (
                                    <li key={ele.index}>
                                        {ele.title}
                                        {ele.projUrl &&
                                            <a href={ele.projUrl}>
                                                <FontAwesomeIcon icon={faGithub} className="mx-2 h-4 inline-block bg-amber-300 rounded-full hover:text-black" />
                                            </a>}
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>


                {others && <p className="text-sm text-zinc-700">* {others}</p>}
            </div>
        </div>
    )
}

