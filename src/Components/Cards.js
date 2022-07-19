import React from "react";

function Card({
    title,
    question,
    answer
}) {

    const [hidesCardTitle, setHidesCardTitle] = React.useState("card-title")
    const [showQuestion, setShowQuestion] = React.useState("hidden")
    const [showAnswer, setShowAnswer] = React.useState("hidden")
    const [titleState, setTitleState] = React.useState("")
    const [color, setColor] = React.useState()

    function openQuestion() {
        setHidesCardTitle("hidden")
        setShowQuestion("question")
    }

    function openAnswer() {
        setShowQuestion("hidden")
        setShowAnswer("answer")
    }

    function correctAnswer(type) {
        setShowAnswer("hidden")
        setHidesCardTitle("card-title")
        setTitleState("scratch-title")
        if (type === "not") setColor(red)
        if (type === "almost") setColor(yellow)
        if (type === "zap") setColor(green)
    }

    const red = {
        color: "#FF3030"
    }

    const green = {
        color: "#2FBE34"
    }

    const yellow =  {
        color: "#FF922E"
    }

    
    return (
        <div className = "card">
            <div className = {hidesCardTitle}>
                <p className = {titleState} style = {color}>{title}</p>
                <img src = "./img/arrow.png" onClick = {openQuestion}/>
            </div>
            <div className = {showQuestion}>
                <p>{question}</p>
                <img src = "./img/vector.png" onClick = {openAnswer}/>
            </div>
            <div className = {showAnswer}>
                <p>{answer}</p>
                <div className = "buttons">
                    <button onClick={() => correctAnswer("not")}>Não lembrei</button>
                    <button onClick={() => correctAnswer("almost")}>Quase não lembrei</button>
                    <button onClick={() => correctAnswer("zap")}>Zap!</button>
                </div>
            </div>
        </div>
    )
}

export default function Cards() {

    const questions = [
        {title:"Pergunta 1", question:"O que é JSX?" , answer:"Uma extensão de linguagem do JavaScript"},
        {title:"Pergunta 2", question:"O React é __", answer:"uma biblioteca JavaScript para construção de interfaces"},
        {title:"Pergunta 3", question:"Componentes devem iniciar com __ ", answer:"letra maiúscula"},
        {title:"Pergunta 4", question:"Podemos colocar __ dentro do JSX", answer:"expressões"}
    ]
    

    return (
        questions.map(value => <Card title = {value.title} question = {value.question} answer = {value.answer}/>)
    )
}