import React from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";

// movie list creates a list of movie card components using data from the movie page GET request 

const generateMovies = (movies) => {
    const movieComponentList = [];
    for (const movie of movies){
        const component = <MovieCard title = {movie.title}/>;
        const yearComponent = <MovieCard yearReleased = {movie.yearReleased}/> ;
        
        movieComponentList.push(component,yearComponent)
    }
    return movieComponentList
}
// const createNewMovie = (message) => {
//     axios
//       .post(`${backendURL}/movies`, {
//         title: '',
//         likes_count: 0,
//         board_id: currentBoard.id,
//       })
//       .then((response) => {
//         console.log(
//           `Success creating boards: ${JSON.stringify(response.data)}`
//         );
//         fetchCardsForBoard();
//       })
//       .catch((error) => {
//         console.error(`Error getting boards: ${error}`);
//       });
//   };
const MovieList = ({movies}) => {
    return (
        <div>
           <h1>Movie List</h1>
           {generateMovies(movies)}
            
            
           
        </div>
       
   

    );
};

export default MovieList;