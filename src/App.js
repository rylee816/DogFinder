import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DogList from "./DogList";
import Dog from "./Dog";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const [dogs, setDogs] = useState([
    {
      name: "Whiskey",
      age: 5,
      src:
        "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Hazel",
      age: 3,
      src:
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZ3N8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than other dogs.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src:
        "https://images.unsplash.com/photo-1528989712079-1506dd4ca2c9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZmF0JTIwZG9nfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food.",
      ],
    },
    {
      name: "Bizzle", 
      age: 19,
      src: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
      facts:[
        "Bizzle is loud",
        "Bizzle is stinky",
        "Bizzle loves potato chips",
        "Bizzle identifies as a dog"
      ]
    }
  ]);

  function handleClick(name) {
    alert("clicked");
    getDog();
  }
  console.log(dogs);

  const getDog = (props) => {
    let name = props.match.params.name;
    let currentDog = dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );
    if(!currentDog){
      return <Redirect to="/" />
    }
    return (
      <Dog
        {...props}
        dog={currentDog}
        name={currentDog.name}
        age={currentDog.age}
        image={currentDog.src}
        facts={currentDog.facts}
      />
    );
    
  };

  return (
    <div>
      <Navbar dogs={dogs}/>
      <div className="App">
      <h1 className="display-3 text-center">Dog Finder</h1>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => <DogList {...routeProps} dogs={dogs}  />}
          />
          <Route exact path="/dogs/:name" render={getDog} />
          <Route render={()=> <h1>Error 404: Not Found</h1>}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
