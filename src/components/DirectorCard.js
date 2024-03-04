import React from "react";

function DirectorCard({director}) {
    const {name, movies} = director;

    return (
        <article>
            <h2>{name}</h2>
            <ul>
                {movies.map(movie => <li>{movie}</li>)}
            </ul>
        </article>
    )
}

export default DirectorCard;