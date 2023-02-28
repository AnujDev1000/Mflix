import React from 'react'

const DetailsBtns = () => {
    return (
        <>
            <button className="btn btn-dark w-100 mt-2 ">Add to cart</button>
            <div className="d-flex flex-row justify-content-between">
                <button className="btn btn-dark mt-2 flex-fill me-2">Share</button>
                <button className="btn btn-dark mt-2 ">...</button>
            </div>
        </>
    )
}

export default DetailsBtns
