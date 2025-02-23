
import MovieCard from "../componenets/MovieCard";
import { useState } from "react";
import "../css/Home.css"


const Home = ()=>{
    const [searchQuery , setSearchQuery] = useState('');//whenever state update , the component will rerender


    const movies = [
        {id:1, title:'first' , release_date : '2025'},  
        {id:2, title:'second' , release_date : '2026'},  
        {id:3, title:'three' , release_date : '2027'}
    ];

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