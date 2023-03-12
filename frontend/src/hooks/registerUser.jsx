import axios from "axios"
import { api_url } from "../env"

const registerUser = async (inputs) => { 
    const url = api_url + "/register"
    return await axios.post(url, inputs)
}

export default registerUser