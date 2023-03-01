import { createContext, useEffect, useState } from "react"

export const NavContext = createContext()

export const NavContextProvider = ({children}) => {
    const [nav, setNav] = useState("home")

    useEffect(() => {
    }, [nav])

    return(
        <NavContext.Provider value={{nav, setNav}}>
            {children}
        </NavContext.Provider>
    )
}