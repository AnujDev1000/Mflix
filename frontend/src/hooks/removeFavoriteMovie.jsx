import axios from "axios";
import { api_url } from "../env";
import authHeader from "../utils/authHeader";

export default function removeFavoriteMovie(id, token, body) {
    const url = api_url + "/favorites/delete/movie/" + id
    return axios.patch(url, body, authHeader(token))
}
