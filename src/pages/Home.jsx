
import MovieCard from "../componenets/MovieCard";
import "../css/Home.css";
import useSearch from "../hooks/useSearch";



const Home = ()=>{
   const {   
    handleSearch ,
    searchQuery,
    setSearchQuery,
    error ,
    loading ,
    movies
  } = useSearch();
   
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
                {
                    error  && <div className="error-message">{error}</div>

                }

                {
                    loading ? <div className="loading">
                                    Loading ...

                              </div>
                            :
                            <div className="movies-grid" >
                            {
                                movies.map((movie , id)=> 
                                     <MovieCard movie={movie} key={id}/>
                                )
                            }
                           </div>
                }

          </div>
}
export default Home;