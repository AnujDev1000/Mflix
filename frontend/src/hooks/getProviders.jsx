import axios from 'axios'
import React from 'react'
import { api_key, base_url } from '../env'

export default function getProviders() {
    const providerUrl = base_url + "/watch/providers/movie" + api_key
    return axios.get(providerUrl)
}
