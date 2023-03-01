import axios from "axios"
import { api_key, base_url } from "../env"

export default function getMovieCast(id) {
    const castUrl = base_url + "/movie/" + id + "/credits" + api_key + "&append_to_response=title, name"
    return axios.get(castUrl)
}
