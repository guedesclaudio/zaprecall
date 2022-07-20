import React, { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import GameScreen from "./GameScreen";


export default function App() {

    const [hidesHome, setHidesHome] = React.useState("home")
    const [hidesGame, setHidesGame] = React.useState("hidden")
    
    return (
        <>
            <WelcomeScreen hidesHome={hidesHome} setHidesHome={setHidesHome} hidesGame={hidesGame} setHidesGame={setHidesGame}/>
            <GameScreen hidesGame={hidesGame}/>
        </>
    )
}