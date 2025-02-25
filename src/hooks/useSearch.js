import { useEffect, useState } from "react";
import {getPopularMovies , searchMovies} from "../services/api.js"


const useSearch = ()=>{
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

    const handleSearch = async(e)=>{
          e.preventDefault();
          if(!searchQuery.trim())return //ensures that searches with only spaces are ignored, preventing unnecessary API calls.
          if(loading) return
          setLoading(true)
          try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults)
            setError(null)//clear error when loaded data if there is previeous error in previous try

          }catch(err){ 
            console.log(err);
            setError("Failed to search movies ...")

          }finally{
            setLoading(false)
          }
   
        //   setSearchQuery("")// it depends to ous

    }

    return {
        handleSearch ,
        searchQuery,
        setSearchQuery,
        error ,
        loading ,
        movies
    }



}
export default useSearch;