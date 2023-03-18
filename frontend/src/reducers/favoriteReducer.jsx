
export default function favoriteReducer(type, payload, favorites, setFavorites) {
    switch(type){
        case "SET_FAVORITES":{
            console.log("SET_FAVORITES");
            setFavorites(payload)
            sessionStorage.setItem("favorites", JSON.stringify(payload))
            break
        }
        case "REMOVE_FAVORITES":{
            console.log("REMOVE_FAVORITES");
            setFavorites(payload)
            sessionStorage.removeItem("favorites")
            break
        }
        case "ADD_MOVIE":{
            console.log("ADD_MOVIE");
            favorites.movies.push(payload)
            sessionStorage.setItem("favorites", JSON.stringify(favorites))
            break
        }
        case "REMOVE_MOVIE":{
            console.log("REMOVE_MOVIE");
            const index = favorites.movies.findIndex(movie => movie.id == payload.id)
            favorites.movies.splice(index, 1)
            sessionStorage.setItem("favorites", JSON.stringify(favorites))
            break
        }
        case "ADD_SHOW":{
            console.log("ADD_SHOW");
            favorites.shows.push(payload)
            sessionStorage.setItem("favorites", JSON.stringify(favorites))
            break
        }
        case "REMOVE_SHOW":{
            console.log("REMOVE_SHOW");
            const index = favorites.shows.findIndex(show => show.id == payload.id)
            favorites.shows.splice(index, 1)
            sessionStorage.setItem("favorites", JSON.stringify(favorites))
            break
        }
        default: {
            break
        }
    }
}
