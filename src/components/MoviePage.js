import { useState, useEffect } from "react";
import{Form} from 'react-bootstrap';
import MovieList from "./MovieList";
import StarRatingMovie from "./StarRatingMovie";
import axios from 'axios';



function MoviePage(){
    const [movies, setMovies] = useState('');
    const backendURL = process.env["REACT_APP_BACKEND_URL"];
    
    function getMoviesForMovieList() {
        axios
          .get(`${backendURL}/movies`)
          .then((response) => {
            console.log(`Success getting movies: ${JSON.stringify(response.data)}`);
            setMovies(response.data);
          })
          .catch((error) => {
            console.error(`Error getting movies: ${error}`);
          });
      } 
      useEffect(() => {
        getMoviesForMovieList()
        
      }, []);
    return (
       <div> 
           <div> Movie Page</div>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                    <MovieList movies = {movies} />
                    </div>
                    <div class="col-sm">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie Title</Form.Label>
                            <Form.Control as="textarea" rows={1} placeholder="The Shawshank Redemption" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Thougts/Opinion/Review:</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="A fantastic movie starring Tim Robbins.. " />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Year Movie was Released</Form.Label>
                            <Form.Control as="textarea" rows={1} placeholder="1994" />
                            <br/>
                        <Form.Label>How well did you like the movie?</Form.Label>
                        <StarRatingMovie />
                        </Form.Group>
                    </Form>
                    </div>
    
                </div>
            </div>
        </div>
        );
    
}

export default MoviePage;

