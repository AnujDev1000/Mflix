import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PersonDetails from '../components/details/PersonDetails'
import PersonCreditsList from '../components/lists/PersonCreditsList'

const PersonRoutes = () => {
    return (
        <Routes>
            <Route path="/person/:id" element={<PersonDetails  />} />
            <Route path="/person/movie/similar/actor/:id" element={<PersonCreditsList type={"movie_credits"} department={"actor"} />} />
            <Route path="/person/movie/similar/crew/:id" element={<PersonCreditsList type={"movie_credits"} department={"crew"} />} />
            <Route path="/person/tv/similar/actor/:id" element={<PersonCreditsList type={"tv_credits"} />} department={"actor"} />
            <Route path="/person/tv/similar/crew/:id" element={<PersonCreditsList type={"tv_credits"} />} department={"crew"} />
        </Routes>
    )
}

export default PersonRoutes
