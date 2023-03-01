import { createContext, useEffect, useState } from "react"

export const SearchContext = createContext()

export const SearchContextProvider = ({children}) => {
    const [search, setSearch] = useState("")
    const [searchData, setSearchData] = useState([])

    useEffect(() => {
    }, [search])

    return(
        <SearchContext.Provider value={{search, setSearch, searchData, setSearchData}}>
            {children}
        </SearchContext.Provider>
    )
}