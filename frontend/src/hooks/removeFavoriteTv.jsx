import axios from "axios";
import { api_url } from "../env";
import authHeader from "../utils/authHeader";

export default function removeFavoriteTv(id, token, body) {
    const url = api_url + "/favorites/delete/tv/" + id
    return axios.patch(url, body, authHeader(token))
}
