import React from 'react';
import MovieList from './MovieList.js';


var Search = (props) => {

  var clickSubmit = function(event) {
    console.log('Clicked')
  }

  return (
   <div>
     <input type= 'text' id= 'input1'/>
     <button className="button1" value="Submit" onClick= {() => {
       let text = document.getElementById("input1").value; clickSubmit()
     }}/>
   </div>

  )
}

export default Search;