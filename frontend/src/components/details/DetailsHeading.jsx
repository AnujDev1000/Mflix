import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const DetailsHeading = ({heading, type, id, category}) => {
    return (
            <div className="details-heading text-white">
                <span className="text-white">{heading}</span>
                {category === "upcoming" ?
                    <Link to={"/" + type}  className="float-end text-decoration-none text-light fw-bold">
                        View All 
                        <FaChevronRight className="mb-1" />
                    </Link>
                    :
                    <Link to={"/" + type + "/" + id}  className="float-end text-decoration-none text-light fw-bold">
                        View All 
                        <FaChevronRight className="mb-1" />
                    </Link>
                }
            </div>
    )
}

export default DetailsHeading
