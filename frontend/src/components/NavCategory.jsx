import React from 'react'

const NavCategory = ({handleCategory}) => {
    return (
        <div className="sticky-top-80 btn-group btn-group-sm w-100 bg-prime py-2 z-index-3">
            <button type="button" id="movie" className="category btn btn-warning fs-small fw-bold mw-max-content" onClick={e => handleCategory(e,"movie")} >
                Movie
            </button>
            <button type="button" id="tv" className="category btn btn-outline-warning fs-small fw-bold mw-max-content" onClick={e => handleCategory(e,"tv")} >
                Tv
            </button>
            <button type="button" id="person" className="category btn btn-outline-warning fs-small fw-bold mw-max-content" onClick={e => handleCategory(e,"person")} >
                Person
            </button>
        </div>
    )
}

export default NavCategory
