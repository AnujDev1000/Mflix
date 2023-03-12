import { createContext, useEffect, useState } from "react"
import userReducer from "../reducers/userReducer"

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : null)

    const dispatch = (type, payload) => {
        userReducer(type, payload, user, setUser)
    }

    useEffect(() => {
        console.log(user);
    }, [user])

    return(
        <UserContext.Provider value={{user, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}