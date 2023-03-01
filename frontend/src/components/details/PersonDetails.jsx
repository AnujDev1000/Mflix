import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import getPersonDetails from '../../hooks/getPersonDetails'
import Loader from '../Loader'
import DetailsPersonCredits from './DetailsPersonCredits'
import DetailsPoster from './DetailsPoster'
import DetailsProfile from './DetailsProfile'
import PersonDetailsContent from './PersonDetailsContent'

const PersonDetails = () => {
    const { id } = useParams()
    const [person, setPerson] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getPersonDetails(id, "all")
                .then(res => {
                    setLoading(false)
                    setPerson(res.data)
                })

    }, [id])
    console.log(person);


    return (
        <>
            {!loading && person.id ? 
                <div className="person-details container navbar-padding">
                    <div className="row justify-content-center mt-sm-5">
                        <div className="col-6 col-sm-6 col-md-3 mb-2">
                            <div className="movie-details-main">
                                <DetailsProfile profile_path={person.profile_path} />
                            </div>
                            <hr className="bg-white d-md-none" />
                        </div>

                        <div className="content col-* col-md-9 mb-2">
                            <PersonDetailsContent person={person} type={"person"} />
                        </div>

                        <div className="Movies-acting col-* mt-5">
                            {person.movie_credits && person.movie_credits.cast.length ?
                                <DetailsPersonCredits similar={person.movie_credits.cast.slice(0,10)} type={"Movie"} id={person.id} department={"Actor"} />
                                :null
                            }
                        </div>

                        <div className="Movies-crew col-* my-2">
                            {person.movie_credits && person.movie_credits.crew.length ?
                                <DetailsPersonCredits similar={person.movie_credits.crew.slice(0,10)} type={"Movie"} id={person.id} department={"Crew"} />
                                :null
                            }
                        </div>  

                        <div className="Tv-acting col-* my-5">
                            {person.tv_credits && person.tv_credits.cast.length ?
                                <DetailsPersonCredits similar={person.tv_credits.cast.slice(0,10)} type={"Tv"} id={person.id} department={"Actor"} />
                                :null
                            }
                        </div>

                        <div className="Tv-crew col-* my-2">
                            {person.tv_credits && person.tv_credits.crew.length > 3 ?
                                <DetailsPersonCredits similar={person.tv_credits.crew.slice(0,10)} type={"Tv"} id={person.id} department={"Crew"} />
                                :null
                            }
                        </div>
                    </div>
                </div>
                :
                <div className="position-relative"><Loader /></div>
            }
        </>
    )
}

export default PersonDetails
