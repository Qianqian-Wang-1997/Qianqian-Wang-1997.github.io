import React from "react"
import intern from "./data"
import { Card } from "./Card"

const Experience = () => {

    return (
        <div className="w-full bg-blue p-8" id="Experience">
            <h1 className="font-Carter text-left text-4xl">Experience</h1>
            {
                intern.map((ele) => {
                    return (
                        <Card key={ele.companyName} 
                        title={ele.title}
                        companyName={ele.companyName}
                        startDate={ele.startDate}
                        endDate={ele.endDate}
                        location={ele.location}
                        locationType={ele.locationType}
                        employmentType={ele.employmentType}
                        jobs={ele.jobs}
                        others={ele.others}
                        logo={ele.logo}></Card>
                    )
                })
            }
        </div>
    )
}

export default Experience
