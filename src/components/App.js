import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleDoubleClick = (event) =>{
    
   console.log("I was double clicked");
  }
  return (
    <div id="main">
      <button onDoubleClick={handleDoubleClick} id="dblclick-btn">Double click me</button>
    </div>
  )
}


export default App;
