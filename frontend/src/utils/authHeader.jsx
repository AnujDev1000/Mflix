import React from 'react'

export default function authHeader(token) {
    return {
        headers:{
            'authorization': 'Bearer ' + token
        }
    }   
}
