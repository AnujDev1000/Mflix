export default function classChangeUtil(param) {

    if(param === "tv"){
        const movieElm = document.getElementById("movie-link");
        if(movieElm){
            movieElm.classList.remove("badge")
            movieElm.classList.remove("bg-warning")
            movieElm.classList.add("text-base1")
            movieElm.classList.remove("text-dark")
            const tvElm = document.getElementById("tv-link");
            tvElm.classList.add("badge")
            tvElm.classList.add("bg-warning")
            tvElm.classList.add("text-dark")
            tvElm.classList.remove("text-base1")
        }
    }
    else{
        const tvElm = document.getElementById("tv-link");
        if(tvElm){
            tvElm.classList.remove("badge")
            tvElm.classList.remove("bg-warning")
            tvElm.classList.add("text-base1")
            tvElm.classList.remove("text-dark")
            const movieElm = document.getElementById("movie-link");
            movieElm.classList.add("badge")
            movieElm.classList.add("bg-warning")
            movieElm.classList.add("text-dark")
            movieElm.classList.remove("text-base1")
        }
    }
}
