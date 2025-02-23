const API_KEY  = "c0d701f7f4ed22ba584d45e137adc455";
const BASE_URL = "https://api.themoviedb.org/3"



export const getPopularMovies = async()=>{
    
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;

}

export const searchMovies = async(query)=>{
    
    const response = await fetch(
                    `${BASE_URL}/search/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;

}