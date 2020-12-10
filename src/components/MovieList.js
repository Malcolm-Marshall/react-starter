import React from 'react';
var MovieList = (props) => {

    return(
    <div>
      <h3>{props.moviesList[0].title}</h3>
      <h3>{props.moviesList[1].title}</h3>
      <h3>{props.moviesList[2].title}</h3>
      <h3>{props.moviesList[3].title}</h3>
      <h3>{props.moviesList[4].title}</h3>
    </div>
  )
}



export default MovieList;


