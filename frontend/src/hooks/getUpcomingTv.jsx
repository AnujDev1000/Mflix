import axios from 'axios'
import { api_key, base_url } from '../env'
import getDateUtil from '../utils/getDateUtil'

export default function getUpcomingTv(page=2) {
    const upcomingUrl = base_url + "/discover/tv" + api_key + "&sort_by=first_air_date.desc&first_air_date.gte=" + getDateUtil(0) + "&first_air_date.lte=" + getDateUtil(1) + "&with_original_language=en|es|hi&page=" + page
    return axios.get(upcomingUrl)
}
