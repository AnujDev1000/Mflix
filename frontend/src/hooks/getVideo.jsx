import axios from "axios"
import { api_key, base_url } from "../env"

export default function getVideo(id,media) {
    const videoUrl = base_url + "/" + media + "/" + id + "/videos" + api_key
    return axios.get(videoUrl)
}
