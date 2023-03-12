import axios from "axios"
import { api_url } from "../env"

const loginUser = async (inputs) => { 
    const url = api_url + "/login"
    return await axios.post(url, inputs)
}

export default loginUser