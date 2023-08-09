import React from "react"
import school from "./data"
import { Card } from "./Card"

const Education = () => {

    return (
        <div className="w-full bg-light-blue p-8" id="Education">
            <h1 className="font-Carter text-left text-4xl">EDUCATION</h1>
            {
                school.map((ele, index) => {
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

export default Education
