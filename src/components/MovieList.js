import React from 'react';
import Movie from './MovieTitle'
var MovieList = (props) => {

  var message = props.movies.length === 0 ? "Movie not in this list. Try again!" : "";

    return(
    <div>
     {message}
     {props.movies.map((movie, i) => <Movie movie= {movie} key= {i} />)}
    </div>
  )
}



export default MovieList;


