import React from 'react'
import { useContext } from 'react'
import { FaSearch } from "react-icons/fa"
import { SearchContext } from '../../context/SearchContext'
import SearchMini from '../search/SearchMini'

const NavbarSearch = ({view, setSearch, handleSearch, search}) => {
    const { searchData } = useContext(SearchContext)

    return (
        <>
            {view === "max" ? 
                <form className="d-none d-md-flex position-relative" onSubmit={e => { e.preventDefault()}} >
                    <div className="input-group input-group-sm z-index" >
                        <input className="form-control bg-transparent border-main text-white placeholder-white" type="search" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} id="searchbox" onKeyUp={e => {e.keyCode === 13 ? handleSearch(e) : null}} />
                        <button type="button" id="searchbtn" className="btn py-0 btn-sm bg-main text-white" onClick={e => handleSearch(e)}>
                            <FaSearch />
                        </button>
                    </div>
                    {search && search.length > 2 ? <>
                            {searchData === "No Data" ? null : <SearchMini view={"max"} searchData={searchData.filter(data => data.poster_path || data.profile_path).slice(0,5)} />}
                        </>
                    : null}
                </form>
                :
                <form className=" d-none d-md-none py-2 px-2 position-absolute search-top w-100 start-0 z-index-main" id="search-btn" onSubmit={e => { e.preventDefault()}}>
                    <div className="w-100 d-flex z-index" >
                        <input className="form-control-sm bg-transparent flex-fill rounded-0 rounded-start border-main text-white placeholder-white" type="search" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} id="searchbox" onKeyUp={e => {e.keyCode === 13 ? handleSearch(e) : null}} />
                        <button type="button" id="searchbtn" className="btn py-0 btn-sm bg-main text-white rounded-0 rounded-end" onClick={e => handleSearch(e)}>
                            <FaSearch />
                        </button>
                    </div>
                    <div className="position-relative">
                        {search && search.length > 2 ? <>
                                {searchData === "No Data" ? null : <SearchMini view={"min"} searchData={searchData.filter(data => data.poster_path || data.profile_path).slice(0,5)} />}
                            </>
                        : null}
                    </div>
                </form>
            }
        </>
    )
}

export default NavbarSearch
