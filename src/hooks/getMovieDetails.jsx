import axios from 'axios'
import { api_key, base_url } from '../env'

export default function getMovieDetails(id, type) {
    let movieUrl = base_url + "/movie/" + id + api_key + "&append_to_response="

    if(type === "all") {
        movieUrl = movieUrl + "videos,images,credits,recommendations,reviews,watch_providers"
    }
    else {
        movieUrl = movieUrl + type
    }
    
    return axios.get(movieUrl)
}
