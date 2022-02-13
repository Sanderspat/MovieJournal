import React from "react"; 
import "./MovieCard.css";


const MovieCard = ({title, yearReleased, rating, thoughts,deleteCard, editCard}) => {
    return (
        <div className="card for movie">
            <p>{title}</p>
            <p>{yearReleased}</p>
            <p>{rating}</p>
            <p>{thoughts}</p>
            <button onClick={deleteCard}> Delete</button>
            <button onClick={editCard}> Edit</button>

        </div>
    )
}

export default MovieCard;