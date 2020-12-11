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
      searchResults: movies
    }
    this.movieSearch = this.movieSearch.bind(this);
  }


  //function to pass to state to search for movies(props)

 movieSearch(search) {
  let results = movies.filter(movie => {
    return movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0}
  );
  this.setState({searchResults: results});
  console.log(search)
}

addMovie(toAdd) {
  console.log('test')
  this.setState({searchResults: toAdd});
}

  render(){
    return(

    <div>
      <MovieAdd addMovie= {this.addMovie}/>
      <Search movies= {movies} movieSearch= {this.movieSearch}/>
      <MovieList movies= {this.state.searchResults}/>
    </div>
  )}
}




export default App;

 /* <form>
      <Search placeholder='Put somethig here'/>
      </form> */