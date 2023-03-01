import React from 'react'
import { Link } from 'react-router-dom';
import PersonCard from '../cards/PersonCard';

const PersonList = ({person}) => {
    
    return (
        <div className="person-list mt-1">
            <div className="row justify-content-center justify-content-sm-start">
                {person.map((singlePerson,i) => 
                    <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                        {singlePerson.profile_path && singlePerson.profile_path.length ? 
                                <Link to={"/person/" + singlePerson.id}>
                                    <PersonCard key={i} singlePerson={singlePerson} />
                                </Link>
                            : null
                        }
                    </div> 
                )}
            </div>
        </div>
    )
}

export default PersonList
