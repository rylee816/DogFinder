import React from "react";
import Dog from "./Dog";
import "./DogList.css";
import {NavLink} from "react-router-dom";
import Navbar from "./Navbar";

function DogList(props){

    return (
        <div className="DogList Dog">
        {props.dogs.map((dog) => {
                return(
                    <div className="dog">
                    <h1>{dog.name}</h1>
                    <NavLink exact to={`/${dog.name}`}><img src={dog.src} alt=""></img></NavLink>
                    <hr className="underline" />
                    </div>
                )
            })}
        </div>
       
    )
}

export default DogList;