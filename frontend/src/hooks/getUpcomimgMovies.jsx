import axios from "axios"
import { api_key, base_url } from "../env"
import getDateUtil from "../utils/getDateUtil"

export default function getUpcomimgMovies(page=1) {
    const upcomingUrl = base_url + "/discover/movie" + api_key + "&sort_by=popularity.desc&primary_release_date.gte=" + getDateUtil(0) + "&primary_release_date.lte=" + getDateUtil(1) + "&page=" + page
    return axios.get(upcomingUrl)
}
