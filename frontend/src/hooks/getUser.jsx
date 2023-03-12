import axios from "axios"
import { api_url } from "../env"

const getUser = async (id) => { 
    const url = api_url + "/get/" + id
    return await axios.get(url)
}

export default getUser