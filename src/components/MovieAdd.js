import React, {Component} from 'react';

class MovieAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addValue: ""
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({addValue: event.target.value});
  }

  render() {
    return (
      <div>
        <input
        type= "text"
        placeholder= "Add a movie to your list!"
        value= {this.state.addValue}
        onChange= {this.handleInput}/>

        <button class="addButton" text="Add" onClick={(event) => this.props.addMovie(event, this.state.addValue)}>Add</button>
      </div>
    )
  }
}

export default MovieAdd