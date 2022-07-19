import React from "react";

function Card({
    title,
    question,
    answer
}) {

    const [hidesCardTitle, setHidesCardTitle] = React.useState("card-title")
    const [showQuestion, setShowQuestion] = React.useState("hidden")

    function openQuestion() {
        setHidesCardTitle("hidden")
        setShowQuestion("question")
    }
    
    return (
        <div className = "card">
            <div className = {hidesCardTitle}>
                <p>{title}</p>
                <img src = "./img/arrow.png" onClick = {openQuestion}/>
            </div>
            
            <div className = {showQuestion}>
                <p>{question}</p>
                <img src = "./img/vector.png"/>
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