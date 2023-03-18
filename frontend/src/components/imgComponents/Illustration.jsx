import React from 'react'
import illustration from "../../assets/illustration.jpg"

const Illustration = () => {
    return (
        <div className="illustration position-absolute h-100 w-100 p-2">
            <img src={illustration} alt="" className="img-responsive rounded shadow" />
        </div>
    )
}

export default Illustration
