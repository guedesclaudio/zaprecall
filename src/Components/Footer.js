import React from "react";

export default function Footer() {

    const [answered, setAnswered] = React.useState(0)
    const [showResult, setShowResult] = React.useState("result hidden")
    const reference = [
        {emoji:"&#x1F973;", title:"Parabéns!", text:"Você não esqueceu de nenhum flashcard!"},
        {emoji:"&#128546;", title:"Putz...", text:"Ainda faltam alguns... Mas não desanime!"},
    ]

    return (
        <div className = "footer">
            <div className = {showResult}>
                <h3>&#x1F973; {reference[0].title}</h3>
                <p>{reference[0].text}</p>
            </div>
            <h1>{answered}/4 CONCLUÍDOS</h1>
        </div>
    )
}