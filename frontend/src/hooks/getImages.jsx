import { api_key, base_url } from "../env"

export default function getImages(id, media) {
    const imageUrl = base_url + "/" + media + "/" + id + "/videos" + api_key
    return axios.get(imageUrl)
}
