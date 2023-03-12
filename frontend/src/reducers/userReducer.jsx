
export default function userReducer(type, payload, user, setUser) {
    switch(type){
        case "SET_USER":{
            setUser(payload)
            console.log("SET_USER");
            sessionStorage.setItem("user", JSON.stringify(payload))
            break
        }
        case "REMOVE_USER":{
            setUser(payload)
            console.log("REMOVE_USER");
            sessionStorage.removeItem("user")
            break
        }
        default:{
            break
        }
    }
}
