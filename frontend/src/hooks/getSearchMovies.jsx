import axios from "axios";
import { api_key, base_url } from "../env"

export default function getSearchMovies(search) {
    const searchUrl = base_url + "/search/multi" + api_key + "&query=" + search
    return axios.get(searchUrl)
}
