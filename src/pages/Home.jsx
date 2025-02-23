
import MovieCard from "../componenets/MovieCard";
import "../css/Home.css";
import { useEffect, useState } from "react";
import {getPopularMovies , searchMovies} from "../services/api.js"



const Home = ()=>{
    const [searchQuery , setSearchQuery] = useState('');//whenever state update , the component will rerender
    const [movies , setMovies] = useState([]);
    const [loading , setLoading] = useState(true);//loading state
    const [error , setError] = useState(null);//error state


    useEffect(()=>{
        const loadPopularMovies = async()=>{
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch(err){
                console.log(err);
                setError("Failed to load movies ...")
            }
            finally{
                setLoading(false);//finish get data or error detected
            }

        }
        loadPopularMovies();

    },[])//if the  dependency array changes , the use Effect will rerun 

    const handleSearch = (e)=>{
          e.preventDefault();
          alert(searchQuery);
          setSearchQuery("")

    }

    return <div className="home">
              <form onSubmit={handleSearch} className="search-form">
                   <input  type="text"
                         placeholder="Seach for movies ..."  
                         className="search-input"
                         value={searchQuery}
                         onChange={(e)=>setSearchQuery(e.target.value)}
                       
                         />
                         
                    <button type="submit" className="search-button">
                      Search
                    </button>

              </form>

               <div className="movies-grid" >
                {
                    movies.map((movie , id)=> 
                         <MovieCard movie={movie} key={id}/>
                    )
                }
               </div>

          </div>
}
export default Home;