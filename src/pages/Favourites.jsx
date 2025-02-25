
import MovieCard from "../componenets/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favorites.css";

const Favourites = ()=>{

    const {favourities} = useMovieContext();

    if(favourities){
        return  <div className="favorities">
                    <div className="movies-grid" >
                        {
                            favourities.map((movie , id)=> 
                                <MovieCard movie={movie} key={id}/>
                            )
                        }
                    </div>
                 </div>
    }
    return <div className="favorites-empty">
                <h2>No Favouite Movies Yet</h2>
                <p>Start adding movies to your favourites , they will appear here .</p>

    </div>

}
export default Favourites ;