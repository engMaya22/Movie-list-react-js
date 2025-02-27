import { createContext, useContext, useEffect, useState } from "react";


const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext)
export const MovieProvider = ({children})=>{
    const [ favourities , setFavourities]  = useState([]);

   
    useEffect(() => {
        const storedFavs = localStorage.getItem("favourities")
        if (storedFavs) setFavourities(JSON.parse(storedFavs))
    }, [])//every render

    
    useEffect(() => {
        //stringify makes JSON object to JSON text stored 
        localStorage.setItem("favourities", JSON.stringify(favourities)) //whenever update this state update storage value with this state
    }, [favourities])
  

    const addToFavourites = (movie) => {
        setFavourities(prev => [...prev, movie])
    }

    const removeFromFavourite = (movieId) => {
        setFavourities(prev => prev.filter(movie => movie.id !== movieId))
    }
    

    const isFavourite = (movieId) => {
        return favourities.some((movie) => movie.id === movieId);
    };

    const value = {
        favourities ,
        addToFavourites ,
        removeFromFavourite,
        isFavourite
    }



    return <MovieContext.Provider value={value}>
        {/* this value can accessable by any componenet was wrapped by this MovieProvider , so we wrapp app component by it */}
            {children}
         </MovieContext.Provider>

}