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

    const [messageErrorInput, setMessageErrorInput] = React.useState("hidden")
    const [messageErrorSelect, setMessageErrorSelect] = React.useState("hidden")
    
    function startsGame () {
        if (userValueInput > 4 || userValueInput < 1 || isNaN(userValueInput) ) {
            setMessageErrorInput("error")
            return
        }
        if (userValueSelect === "" ) {
            setMessageErrorSelect("error")
            return
        }
        setHidesHome("home hidden")
        setHidesGame("")
    }

    const getInputValueInput = (event) => {
        setUserValueInput(Number(event.target.value)) 
        setMessageErrorInput("hidden")
        console.log(userValueInput)
    }

    const getInputValueSelect = (event) => {
        setUserValueSelect(event.target.value)
        setMessageErrorSelect("hidden")
    }

    return (
        <div className = {hidesHome}>
            <img src = "./img/lightning.png" />
            <h1>ZapRecall</h1>
            <div className = "error"><p className = {messageErrorInput}>Digite um valor entre 1 e 4</p></div>
            <input type = "text" placeholder = "Digite a sua meta de zaps" onChange = {getInputValueInput}/>
            <div className = "error"><p className = {messageErrorSelect}>Escolha um deck de cards</p></div>
            <select onChange = {getInputValueSelect}>
                <option value = "" disabled selected>Escolha seu deck</option>
                <option value = "JSX">JSX</option>
                <option value = "CSS">HTML</option>
            </select>
            <button  onClick = {startsGame}>Iniciar Recall!</button>
        </div>
    )
}