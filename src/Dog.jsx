import React from "react";
import {Link} from "react-router-dom";
import "./Dog.css";

function Dog(props) {
  return (
    <div className="Dog">
      <h2>{props.name}</h2>
      <h3>{props.age} years old.</h3>
      <div className="image-container">
      <img onClick={props.clicked} src={props.image} alt={props.name}></img>
      </div>
      <div className="Dog-facts">
        {props.facts.map((fact) => {
            return (
            <h7>{fact}</h7>
            )     
        })}
          <Link to="/"><button className="btn btn-sm btn-danger">Go Back</button></Link>
      </div>
    </div>
  );
}

export default Dog;
