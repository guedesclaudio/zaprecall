import React from "react";
import LogoBrand from "./LogoBrand";
import Cards from "./Cards";
import Footer from "./Footer"


export default function GameScreen({hidesGame}) {

    const [counter, setCounter] = React.useState(0)
    //const [iconResult, setIconResult] = React.useState("")
    const [iconResult, setIconResult] = React.useState([])
    const [showResult, setShowResult] = React.useState("result hidden")
    const [yesOrNot, setYesOrNot] = React.useState(1)

    return (
        <div className = {hidesGame}>
            <LogoBrand/>
            <Cards counter = {counter} setCounter = {setCounter} iconResult = {iconResult} setIconResult = {setIconResult} showResult = {showResult} setShowResult = {setShowResult} yesOrNot = {yesOrNot} setYesOrNot = {setYesOrNot}/>
            <Footer  counter = {counter} iconResult = {iconResult} showResult = {showResult} yesOrNot = {yesOrNot}/>
        </div>
    )
}

