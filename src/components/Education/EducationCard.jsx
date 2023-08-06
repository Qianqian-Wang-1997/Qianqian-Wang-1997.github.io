export function EducationCard({ name, startDate, endDate, location, degree, major, courses, others, logo }) {
    let showDate = (date) => {
        return new Date(date).toLocaleString(
            'en-US',
            { timeZone: 'UTC', month: 'short', year: 'numeric' })
    }
    return (
        <div className="p-5  m-5 rounded-lg text-purple
        bg-stone-50/50 hover:bg-stone-100
        drop-shadow-2xl">
            <div className="flex">
                <img src={`./src/assets/brand/${logo}.jpg`}
                    className="w-32 h-32 rounded-full border-purple-200 border-4 drop-shadow-2xl" />
                <div className="w-3/4">
                    <h2 className="font-Carter text-xl underline">{name}</h2>
                    <p className="text-bold">{degree}</p>

                    <div className="text-right text-xs">
                        <p className="inline-block">
                            {showDate(startDate)} - {showDate(endDate)}
                        </p>
                        <p className="inline-block pl-5">{location}</p>
                    </div>

                    <p>{major}</p>
                    {courses ? <p>Related Courses</p> : <></>}
                    {
                        courses?.map((ele) => {
                            console.log(ele)
                            return (
                                <>
                                    <p>{ele.id}</p>
                                    <p>{ele.title}</p>
                                </>
                            )
                        })
                    }
                    <p>{others}</p>
                </div>
            </div>

        </div>
    )
}

