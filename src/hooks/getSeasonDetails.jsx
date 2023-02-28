import axios from "axios"
import { api_key, base_url } from "../env"

export default function getSeasonDetails(id, tvId) {
    const seasonUrl = base_url + "/tv/" + tvId + "/season/" + id + api_key
    return axios.get(seasonUrl)
}
