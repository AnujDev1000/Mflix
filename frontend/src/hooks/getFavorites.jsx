import axios from "axios";
import { api_url } from "../env";
import authHeader from "../utils/authHeader";

export default function getFavorites(id, token) {
    const url = api_url + "/favorites/get/" + id
    return axios.get(url, authHeader(token))
}
