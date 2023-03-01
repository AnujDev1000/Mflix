import React, {  useContext, useEffect } from 'react'
import { FaWindowClose } from "react-icons/fa"
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import List from '../lists/List'
import Loader from '../Loader'
import NoData from '../NoData'

const Search = () => {
    const navigate = useNavigate()
    const { search, setSearch, searchData, setSearchData } = useContext(SearchContext)


    useEffect(() => {
        const searchElm = document.getElementById("search")
        const searchMini = document.getElementById("search-mini")
        const searchMini2 = document.getElementById("search-mini2")
        if(searchElm){
            searchElm && searchElm.addEventListener("click", () => {
                searchMini && searchMini.classList.add("d-none")
                searchMini2 && searchMini2.classList.add("d-none")
            })
        }
    }, [searchData])

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch("")
        setSearchData([])
        const elm = document.getElementById("search-btn")
        elm.classList.add("d-none")
        navigate(-1)
    }

    return (
        <div className="search container navbar-padding z-index-10" id="search">
            <div className="search-header d-flex flex-row justify-content-between">
                <div className="header-data">
                    <span className="text-base2 text-uppercase fs-small">Results For</span>
                    <h2 className="text-white mb-2 fw-bold">{search}</h2>
                </div>
                <div className="close-search">
                    <FaWindowClose className="text-white fs-5 cursor-pointer" onClick={e => handleSearch(e)} />
                </div>
            </div>
            <hr className="bg-light m-0"/>
            {search && search.length ? <>
                {searchData && searchData !== "No Data"  ? <>
                    {searchData && searchData.length ? <List setSearch={setSearch} all={searchData} /> : <div className="position-relative my-4"><Loader /></div> }
                </>
                : <NoData />}
                </>
                :
                <NoData />
            }
        </div>
    )
}

export default Search
