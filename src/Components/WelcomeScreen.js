import React from "react";

export default function WelcomeScreen({
    hidesHome, 
    setHidesHome, 
    setHidesGame
}) {
    
    function startsGame () {
        setHidesHome("home hidden")
        setHidesGame("")
    }
    
    return (
        <div className = {hidesHome}>
            <img src = "./img/lightning.png" />
            <h1>ZapRecall</h1>
            <button  onClick = {startsGame}>Iniciar Recall!</button>
        </div>
    )
}