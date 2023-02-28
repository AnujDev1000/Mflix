import axios from 'axios'
import { api_key, base_url } from '../env'

export default function getGenreTv(id, type, page) {
    const genreUrl = base_url + "/discover/" + type + api_key + "&with_genres=" + id + "&sort_by=popularity.desc&with_original_language=en|es|hi&page=" + page
    return axios.get(genreUrl)
}
