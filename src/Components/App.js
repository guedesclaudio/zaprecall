import React, { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import GameScreen from "./GameScreen";
import "./style.css"


export default function App() {

    const [hidesHome, setHidesHome] = React.useState("home")
    const [hidesGame, setHidesGame] = React.useState("hidden")
    const [userValueInput, setUserValueInput] = React.useState("")
    const [userValueSelect, setUserValueSelect] = React.useState("")
    
    return (
        <>
            <WelcomeScreen hidesHome = 
            {hidesHome} setHidesHome = {setHidesHome} 
            hidesGame = {hidesGame} setHidesGame = 
            {setHidesGame} userValueInput = {userValueInput} 
            setUserValueInput = {setUserValueInput} userValueSelect = {userValueSelect} 
            setUserValueSelect = {setUserValueSelect}/>
            <GameScreen hidesGame = {hidesGame} userValueInput = {userValueInput} 
            setUserValueInput = {setUserValueInput} userValueSelect = {userValueSelect} 
            setUserValueSelect = {setUserValueSelect}/>
        </>
    )
}