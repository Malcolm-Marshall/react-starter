import React, {Component} from 'react';

class MovieAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: ""
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({movie: event.target.value});
  }

  render() {
    return (
      <form>
        <div>
          <input
          type= "text"
          placeholder= "Add a movie to your list!"
          value= {this.state.movie}
          onChange= {this.handleInput}/>

          <button class="addButton" text="Add" onClick={(event) => this.props.addMovie(event, this.state.movie)}>Add</button>
        </div>
      </form>

    )
  }
}

export default MovieAdd