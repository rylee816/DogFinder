import React from "react";
import {NavLink, Link} from "react-router-dom";
import "./Navbar.css"


function Navbar(props){
    let name = props.dogs.map((dog)=> {
        return (
            <li className="nav-item" key={dog.name}>
              <NavLink className="nav-link" exact to={`/${dog.name}`}>{dog.name}</NavLink>  
            </li>
        )
    })
return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">DogFinder</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      {name}
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
)




    //     return (
//    <nav className="navbar navbar-expand-lg navbar-light bg-light">
//        <NavLink classname="nav-item" to="/dogs/whiskey">Whiskey</NavLink>
//        <NavLink classname="nav-item" to="/dogs/hazel">Hazel</NavLink>
//        <NavLink classname="nav-item" to="/dogs/tubby">Tubby</NavLink>
//    </nav>
//     )

  
}

export default Navbar;