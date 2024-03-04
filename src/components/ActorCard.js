import React from "react";

function ActorCard({actor}) {
    const {name, movies} = actor;

    return (
        <article>
            <h2>{name}</h2>
            <ul>
                {movies.map(movie => <li>{movie}</li>)}
            </ul>
        </article>
    )
}

export default ActorCard;