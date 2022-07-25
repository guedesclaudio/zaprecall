import React from "react";
import lightning from "./img/lightning.png"

export default function WelcomeScreen({
    hidesHome, 
    setHidesHome, 
    setHidesGame,
    userValueInput,
    setUserValueInput,
    userValueSelect,
    setUserValueSelect
}) {

    const [messageError, setMessageError] = React.useState("")
    //const [messageErrorSelect, setMessageErrorSelect] = React.useState("hidden")
    const [showInput, setShowInput] = React.useState("")
    const [showSelect, setShowSelect] = React.useState("hidden")
    
    function startsGame () {
        if (userValueInput > 4 || userValueInput < 1 || isNaN(userValueInput) ) {
            setMessageError("Digite entre 1 e 4")
            return
        }
        setShowInput("hidden")
        setShowSelect("")
        if (userValueSelect === "" ) {
            setMessageError("Escolha um deck de cards")
            return
        }
        setHidesHome("home hidden")
        setHidesGame("")
    }

    const getInputValueInput = (event) => {
        setUserValueInput(Number(event.target.value)) 
        setMessageError("")
        console.log(userValueInput)
    }

    const getInputValueSelect = (event) => {
        setUserValueSelect(event.target.value)
        setMessageError("")
    }

    return (
        <div className = {hidesHome}>
            <img src = {lightning} />
            <h1>ZapRecall</h1>
            <div className = "error"><p>{messageError}</p></div>
            <input className = {showInput} type = "text" placeholder = "Digite a sua meta de zaps" onChange = {getInputValueInput}/>
            <select className = {showSelect} onChange = {getInputValueSelect}>
                <option value = "" disabled selected >Escolha seu deck</option>
                <option value = "JSX">JSX</option>
                <option value = "CSS">HTML</option>
            </select>
            <button  onClick = {startsGame}>Iniciar Recall!</button>
        </div>
    )
}