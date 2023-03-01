import { useEffect, useContext  } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import getSearchMovies from "../../hooks/getSearchMovies";
import NavbarBtns from "./NavbarBtns";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import NavbarSearch from "./NavbarSearch";
import NavbarUser from "./NavbarUser";

const Navbar = () => {
    const navigate = useNavigate()
    const { search, setSearch , setSearchData } = useContext(SearchContext)

    const sticky = () => {
        const elm = document.getElementById("navbar")
        const elm2 = document.getElementById("search-btn")
        if(window.scrollY > 0) {
            elm.classList.add("bg-prime")
            elm2.classList.add("bg-prime")
        }
        else{
            elm.classList.remove("bg-prime")  
            elm2.classList.remove("bg-prime")  
        } 
            
    }

    useEffect(() => {
        setSearchData([])
        if(search.length > 2){
            setSearchData([])
            getSearchMovies(search)
            .then(res => {
                if(res.data.results.length){
                    setSearchData(res.data.results)
                }
                else{
                    setSearchData("No Data")
                }
            })
        }
        else{
            setSearchData([])
        }

        window.addEventListener("scroll", sticky)
    }, [search])

    const handleSearch = (e) => {
        e.preventDefault()
        const elm = document.getElementById("search-mini")
        const elm2 = document.getElementById("search-mini2")
        if(search.length > 2){
            elm && elm.classList.add("d-none")
            elm2 && elm2.classList.add("d-none")
            navigate("/search/" + search)
        }
    }

    const openSearchBox = (e) => {
        e.preventDefault()
        const elm = document.getElementById("search-btn")
        const elm2 = document.getElementById("navabr-menu")
        if(elm.classList.contains("d-none")){
            elm.classList.remove("d-none")
            elm2.classList.add("pt-5")
        }
        else{
            setSearch("")
            setSearchData([])
            elm.classList.add("d-none")
            elm2.classList.remove("pt-5")
        }
    }


    const openUserBox = (e) => {
        e.preventDefault()
        const elm = document.getElementById("user-box")
        const elm2 = document.getElementById("user-box2")
        if(elm.classList.contains("d-none")){
            elm.classList.remove("d-none")
            elm2.classList.remove("d-none")
        }
        else{
            setSearch("")
            elm.classList.add("d-none")
            elm2.classList.add("d-none")
        }
    }

    return (
        <>
            <nav className="container px-2 navbar navbar-light fixed-top rounded navbar-expand-md z-index" id="navbar">
                <NavbarLogo />
                <NavbarBtns openSearchBox={openSearchBox} openUserBox={openUserBox} />
                
                <div className="collapse navbar-collapse z-index-main position-relative" id="navdata">
                    <NavbarMenu />
                    <NavbarSearch view={"max"} setSearch={setSearch} handleSearch={handleSearch} search={search} />
                    <NavbarUser openUserBox={openUserBox} />
                </div>
                <NavbarSearch view={"min"} setSearch={setSearch} handleSearch={handleSearch} search={search} />
            </nav>
        </>
    )
}

export default Navbar
