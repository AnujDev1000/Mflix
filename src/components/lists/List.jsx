
import React, { useEffect, useState } from 'react'
import classChangeUtil2 from '../../utils/classChangeUtil2'
import MovieList from './MovieList'
import NavCategory from '../NavCategory'
import PersonList from './PersonList'
import TvList from './TvList'
import NoData from '../NoData'

const List = (props) => {
    const [category, setCategory] = useState("movie")
    const movies = props.all.filter(data => data.media_type === "movie")
    const tv = props.all.filter(data => data.media_type === "tv")
    const person = props.all.filter(data => data.media_type === "person")

    const handleCategory = (e,param) => {
        e.preventDefault()
        classChangeUtil2(param, category)
        setCategory(param)  
    }

    useEffect(() => {
    }, [category])

    return (    
        <div className="list container mt-2 position-relative p-0">
            <NavCategory handleCategory={handleCategory} />
            {category === "movie" ? <>
                {movies && movies.length ? <MovieList movies={movies} /> : 
                    <NoData />}
            </> : null}
            {category === "tv" ? <>
                {tv && tv.length ? <TvList tv={tv} /> : 
                    <NoData />}
            </> : null}
            {category === "person" ? <>
                {person && person.length ? <PersonList person={person} /> : 
                    <NoData />}
            </> : null}
        </div>
    )
}

export default List
