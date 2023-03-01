import axios from 'axios'
import { api_key, base_url } from '../env'

export default function getTvDetails(id, type) {
    let tvUrl = base_url + "/tv/" + id + api_key + "&append_to_response="

    if(type === "all") {
        tvUrl = tvUrl + "videos,images,credits,recommendations,reviews"
    }
    else {
        tvUrl = tvUrl + type
    }
    
    return axios.get(tvUrl)
}
