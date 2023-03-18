import { createContext, useContext, useEffect, useState } from "react"
import favoriteReducer from "../reducers/favoriteReducer"

export const FavoriteContext = createContext()

export const FavoriteContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState(sessionStorage.getItem("favorites") ? JSON.parse(sessionStorage.getItem("favorites")) : null)

    const dispatchFavorites = (type, payload) => {
        favoriteReducer(type, payload, favorites, setFavorites)
    }


    useEffect(() => {
        console.log(favorites);
    }, [favorites])

    return(
        <FavoriteContext.Provider value={{favorites, dispatchFavorites}}>
            {children}
        </FavoriteContext.Provider>
    )
}