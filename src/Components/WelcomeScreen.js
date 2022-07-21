import React from "react";

export default function WelcomeScreen({
    hidesHome, 
    setHidesHome, 
    setHidesGame,
    userValueInput,
    setUserValueInput,
    userValueSelect,
    setUserValueSelect
}) {
    
    function startsGame () {
        if (userValueInput > 4 || userValueInput < 1) {
            alert("Digite no minimo 1 e maximo 4")
            return
        }
        setHidesHome("home hidden")
        setHidesGame("")
    }

    const getInputValueInput = (event) => {
        setUserValueInput(event.target.value) 
        console.log(userValueInput)
    }

    const getInputValueSelect = (event) => {
        setUserValueSelect(event.target.value)
        console.log(userValueSelect)
    }

    return (
        <div className = {hidesHome}>
            <img src = "./img/lightning.png" />
            <h1>ZapRecall</h1>
            <input type = "text" placeholder = "Digite a sua meta de zaps" onChange = {getInputValueInput}/>
            <select onChange = {getInputValueSelect}>
                <option value = "" disabled selected>Escolha seu deck</option>
                <option value = "JSX">JSX</option>
                <option value = "CSS">HTML</option>
            </select>
            <button  onClick = {startsGame}>Iniciar Recall!</button>
        </div>
    )
}