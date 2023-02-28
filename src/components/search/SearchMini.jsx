import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import SearchMovieCard from './SearchMovieCard';

const SearchMini = ({searchData, view}) => {
    const { setSearch } = useContext(SearchContext)
    return (
        <>
            {view === "max" ? 
                <div className="search-mini search-top-2 bg-main rounded-bottom p-2 pb-0 mt-1 position-absolute start-0 w-100  z-index"  id="search-mini" >
                    <div className="d-flex flex-column">
                        {searchData.map((movie, i) =>
                            <Link key={i} to={"/" + movie.media_type + "/" + movie.id} className="text-decoration-none mb-2" onClick={e => setSearch("")} >
                                <SearchMovieCard movie={movie} />
                            </Link> 
                        )}
                    </div>
                </div>
                : 
                <div className="search-mini bg-main rounded-bottom p-2 pb-0 mt-1 position-absolute start-0 w-100  z-index" id="search-mini2" >
                    <div className="d-flex flex-column">
                        {searchData.map((movie, i) =>
                            <Link key={i} to={"/" + movie.media_type + "/" + movie.id} className="text-decoration-none mb-2" onClick={e => setSearch("")} >
                                <SearchMovieCard movie={movie} />
                            </Link> 
                        )}
                    </div>
                </div>  
            }
        </>
    )
}

export default SearchMini
