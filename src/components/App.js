import React from 'react';
import MovieList from './MovieList.js';
import Css from '../main.css'
import Search from './Search.js'
import MovieAdd from './MovieAdd.js'

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      allMovies: []
    }
    this.movieSearch = this.movieSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }


  //function to pass to state to search for movies(props)

 movieSearch(search) {
  let results = this.allMovies.filter(movie => {
    return movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0}
  );
  this.setState({searchResults: results});
}

addMovie(event, movie) {
  event.preventDefault();
  // this.setState({searchResults: this.state.searchResults.slice().push(searchResults), allMovies: this.state.allMovies.slice().push(allMovies)});
  this.setState({
    allMovies: [...this.state.allMovies, {title: movie}],
    searchResults: [...this.state.searchResults, {title: movie}]
  });
}

  render(){
    return(

    <div>
      <MovieAdd addMovie= {this.addMovie}/>
      <Search movies= {this.state.allMovies} movieSearch= {this.movieSearch}/>
      <MovieList movies= {this.state.searchResults}/>
    </div>
  )}
}




export default App;

 /* <form>
      <Search placeholder='Put somethig here'/>
      </form> */