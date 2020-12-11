import React, {Component} from 'react';



class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ""
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({searchValue: event.target.value});
  }

  render() {
    return (
      <div>
        <input
        type= "text"
        placeholder= "Search for a Movie!"
        value= {this.state.searchValue}
        onChange= {this.handleInput}/>

        <button class="button" text="Search" onClick={() => this.props.movieSearch(this.state.searchValue)} >Search</button>
      </div>
    )
  }
}

export default Search;












// var Search = (props) => {

//   var clickSubmit = function(event) {
//     console.log('Clicked')
//   }

//   return (
//    <div>
//      <input type= 'text' id= 'input1'/>
//      <button className="button1" value="Submit" onClick= {() => {
//        let text = document.getElementById("input1").value; clickSubmit()
//      }}/>
//    </div>

//   )
// }

// export default Search;