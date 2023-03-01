import React from 'react'
import No_Data from "../assets/No_Data.svg"

const NoData = () => {
    return (
        <div className="no-data p-5 d-flex flex-column justify-content-center">
            <img src={No_Data} alt="" className="img-fluid mh-200" />
            <span className="text-base1 fs-2 text-center mt-2">No Data to Show...</span>
        </div>
    )
}

export default NoData
