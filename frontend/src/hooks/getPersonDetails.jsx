import axios from 'axios'
import { api_key, base_url } from '../env'

export default function getPersonDetails(id, type) {
    let personUrl = base_url + "/person/" + id + api_key + "&append_to_response="

    if(type === "all") {
        personUrl = personUrl + "images,movie_credits,tv_credits"
    }
    else {
        personUrl = personUrl + type
    }
    
    return axios.get(personUrl)
}
