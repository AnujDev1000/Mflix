import axios from "axios";
import { api_url } from "../env";
import authHeader from "../utils/authHeader";

export default function addFavoriteTv(id, token, body) {
    const url = api_url + "/favorites/add/tv/" + id
    return axios.patch(url, body, authHeader(token))
}
