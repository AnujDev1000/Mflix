import React, { useRef, useState } from 'react'
import AutoCompleteInput from '../components/AutoCompleteInput'
import genresKeys from "../genresKeys.json"
import countries from "../countries.json"
import languages from "../languages.json"

const Discover = () => {
    const fromRef = useRef()
    const toRef = useRef()
    const [inputs, setInputs] = useState({ type: "movie", from: null, to: null, genre: null, country: null, language: null})
    


    return (
        <div className="container navbar-padding text-light">
            <div className="discover-header d-flex flex-row justify-content-between align-items-center">
                <h2 className="text-white mb-2 fw-bold">Discover</h2>
                <button className="btn btn-warning btn-sm">Filter</button>
            </div>
            <hr className="bg-light m-0"/>
            <div className="filter-box mt-3">
                <div className="row g-2">
                    <div className="col-6 col-lg-2">
                        <select class="form-select me-2">
                            <option selected>Movie</option>
                            <option value="2">Tv</option>
                        </select>
                    </div>
                    <div className="col-6 col-lg-2">
                        {inputs.genre == "movie" ?
                            <AutoCompleteInput title={"genre"} data={genresKeys.slice(0,19)} />
                            :
                            <AutoCompleteInput title={"genre"} data={genresKeys.slice(19,27)} />
                        }
                    </div>
                    <div className="col-6 col-lg-2">
                        <AutoCompleteInput title={"country"} data={countries} />
                    </div>
                    <div className="col-6 col-lg-2">
                        <AutoCompleteInput title={"language"} data={languages} />
                    </div>
                    <div className="col-6 col-lg-2">
                        <input className="form-control me-2" ref={fromRef} type="text" name="from" id="from" placeholder="From" onFocus={() => (fromRef.current.type = "date")} onBlur={() => (fromRef.current.type = "text")} />
                    </div>
                    <div className="col-6 col-lg-2">
                        <input className="form-control" ref={toRef} type="text" name="to" id="to" placeholder="To" onFocus={() => (toRef.current.type = "date")} onBlur={() => (toRef.current.type = "text")} />
                    </div>

                    {/* <div className="col-6 col-lg-2">
                        <select class="form-select me-2">
                        <option selected>Genres</option>
                            <option value="28">Action</option>          
                            <option value="12">Adventure</option>    
                            <option value="16">Animation</option>      
                            <option value="35">Comedy</option>         
                            <option value="80">Crime</option>          
                            <option value="99">Documentary</option>    
                            <option value="18">Drama</option>          
                            <option value="10751">Family</option>         
                            <option value="14">Fantasy</option>        
                            <option value="36">History</option>        
                            <option value="27">Horror</option>         
                            <option value="10402">Music</option>          
                            <option value="9648">Mystery</option>        
                            <option value="10749">Romance</option>        
                            <option value="878">Science Fiction</option>
                            <option value="10770">TV Movie</option>       
                            <option value="53">Thriller</option>       
                            <option value="10752">War</option>            
                            <option value="37">Western</option>
                        </select>
                    </div>
                    
                    <div className="col-6 col-lg-2">
                        <select class="form-select me-2">
                        <option selected>Country</option>
                            <option value="28">Action</option>          
                            <option value="12">Adventure</option>    
                            <option value="16">Animation</option>      
                            <option value="35">Comedy</option>         
                            <option value="80">Crime</option>          
                            <option value="99">Documentary</option>    
                            <option value="18">Drama</option>          
                            <option value="10751">Family</option>         
                            <option value="14">Fantasy</option>        
                            <option value="36">History</option>        
                            <option value="27">Horror</option>         
                            <option value="10402">Music</option>          
                            <option value="9648">Mystery</option>        
                            <option value="10749">Romance</option>        
                            <option value="878">Science Fiction</option>
                            <option value="10770">TV Movie</option>       
                            <option value="53">Thriller</option>       
                            <option value="10752">War</option>            
                            <option value="37">Western</option>
                        </select>
                    </div>
                    <div className="col-6 col-lg-2">
                        <select class="form-select me-2">
                        <option selected>Language</option>
                            <option value="28">Action</option>          
                            <option value="12">Adventure</option>    
                            <option value="16">Animation</option>      
                            <option value="35">Comedy</option>         
                            <option value="80">Crime</option>          
                            <option value="99">Documentary</option>    
                            <option value="18">Drama</option>          
                            <option value="10751">Family</option>         
                            <option value="14">Fantasy</option>        
                            <option value="36">History</option>        
                            <option value="27">Horror</option>         
                            <option value="10402">Music</option>          
                            <option value="9648">Mystery</option>        
                            <option value="10749">Romance</option>        
                            <option value="878">Science Fiction</option>
                            <option value="10770">TV Movie</option>       
                            <option value="53">Thriller</option>       
                            <option value="10752">War</option>            
                            <option value="37">Western</option>
                        </select>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Discover
