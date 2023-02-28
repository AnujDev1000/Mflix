import React, { useState } from 'react'

const PersonDetailsContent = ({person, type}) => {
    const [content, setContent] = useState(700)

    return (
        <div className="person-detail-content w-100">
            <h1 className="fw-bold text-white">
                {person.name}
                <span className="text-info fs-small"> {person.place_of_birth.split(",")[2]}</span>
            </h1>
            <span className="text-grey-shade">
                {person.birthday && person.birthday.split("-")[0]}
                {person.deathday ? 
                    <>
                        <span className="pb-2"> - </span>
                        {person.deathday.split("-")[0]}
                    </> 
                    : null
                }
            </span>
            <br/>
            <span className=" text-warning">
                {person.known_for_department}
            </span>
            
            <hr className="bg-white" />
            <p className="discription text-white text-ellipsis mt-2">
                {person.biography && person.biography.length > 700 ?
                    <> 
                        {person.biography.substring(0,content)} 
                        {content <= 700 ?
                            <span className="text-primary cursor-pointer" onClick={e => setContent(person.biography.length+1)}> Read More...</span>
                            :
                            <span className="text-primary cursor-pointer" onClick={e => setContent(700)}> Show Less...</span>
                        }
                    </>
                    : person.biography}
                    
            </p>
            <hr className="bg-white d-md-none" />
        </div>
    )
}

export default PersonDetailsContent
