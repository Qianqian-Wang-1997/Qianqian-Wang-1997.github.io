import React from "react"
import intern from "./data"
import { Card } from "../Card"

const Experience = () => {

    return (
        <div className="w-full bg-blue p-8" id="Experience">
            <h1 className="font-Carter text-left text-4xl">Experience</h1>
            {
                intern.map((ele, index) => {
                    return (
                        <Card key={index} 
                        name={ele.name}
                        startDate={ele.startDate}
                        endDate={ele.endDate}
                        location={ele.location}
                        degree={ele.degree}
                        major={ele.major}
                        courses={ele.courses}
                        others={ele.others}
                        logo={ele.logo}></Card>
                    )
                })
            }
        </div>
    )
}

export default Experience
