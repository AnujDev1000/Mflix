import axios from "axios"
import { api_key, base_url } from "../env"

export default function getPlayingMovies() {
    const playingUrl = base_url + "/movie/now_playing" + api_key + "&sort_by=popularity.desc&append_to_response=videos"
    return axios.get(playingUrl)
}
