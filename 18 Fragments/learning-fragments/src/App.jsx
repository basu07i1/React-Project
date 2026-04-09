import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  let foodItems = ["Dal" , "Soyabeans" , "Curd" , "Dalia" , "Fruits"];
  

  return (
    <React.Fragment>
  <h1>Healthy Food</h1>
  <ul className="list-group">
    {foodItems.map((item) => (
      <li key={item} className="list-group-item">{item}</li>
      ))} 
</ul>
  </React.Fragment>
  )
}

export default App
