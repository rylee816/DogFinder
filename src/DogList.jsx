import React from "react";
import Dog from "./Dog";
import "./DogList.css";

function DogList(props){

    return (
        <div className="DogList Dog">
        {props.dogs.map((dog) => {
                return(
                    <div className="dog">
                    <h1>{dog.name}</h1>
                    <a href={`/dogs/${dog.name}`}><img src={dog.src} alt=""></img></a>
                    <hr className="underline" />
                    </div>
                )
            })}
        </div>
       
    )
}

export default DogList;