import React from 'react'

const DetailsBtns = ({favorite, type, addToFavorite, removeFromFavorite, favoriteLoading}) => {

    return (
        <>
            {favorite ?
                <button type="button" className="btn btn-warning w-100 mt-2 fw-bold" onClick={e => removeFromFavorite(e)}>
                    Favorite
                </button>
                : 
                <button type="button" className="btn btn-dark w-100 mt-2 " onClick={e => addToFavorite(e)} >
                    Add to Favorites
                </button>
            }
            {/* <div className="d-flex flex-row justify-content-between">
                <button className="btn btn-dark mt-2 flex-fill me-2">Share</button>
                <button className="btn btn-dark mt-2 ">...</button>
            </div> */}
        </>
    )
}

export default DetailsBtns
