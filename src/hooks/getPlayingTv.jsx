import axios from 'axios'
import { api_key, base_url } from '../env'

export default function getPlayingTv() {
    const playingUrl = base_url + "/tv/on_the_air" + api_key + "&sort_by=popularity.desc&with_original_language=en|jp"
    return axios.get(playingUrl)
}
