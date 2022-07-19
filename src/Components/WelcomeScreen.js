import React from "react";
import LogoBrand from "./LogoBrand";

export default function WelcomeScreen() {

    const [hidesHome, setHidesHome] = React.useState("home hidden")

    function hidden () {
        setHidesHome("home hidden")
    }

    return (
        <div className = {hidesHome}>
            <img src = "./img/lightning.png"/>
            <h1 >ZapRecall</h1>
            <button  onClick={hidden}>Iniciar Recall!</button>
        </div>
    )
}