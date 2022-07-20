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
    const [iconAnswer, setIconAnswer] = React.useState("./img/arrow.png")
    const [checkQuestion, setCheckQuestion] = React.useState(false)
    
    function openQuestion() {
        if (checkQuestion === false) {
            setHidesCardTitle("hidden")
            setShowQuestion("question")
        }
    }

    function openAnswer() {
        setShowQuestion("hidden")
        setShowAnswer("answer")
    }

    function correctAnswer(type) {
        setShowAnswer("hidden")
        setHidesCardTitle("card-title")
        setTitleState("scratch-title")
        setCheckQuestion(true)
        if (type === "not") {
            setColor(red)
            setIconAnswer("./img/not.png")
        }
        if (type === "almost") {
            setColor(yellow)
            setIconAnswer("./img/almost.png")
        }
        if (type === "zap") {
            setColor(green)
            setIconAnswer("./img/zap.png")
        }

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
                <img src = {iconAnswer} onClick = {openQuestion}/>
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
        {title:"Pergunta 1", question:["O que é JSX?", "O ReactDOM nos ajuda __"] , answer:["Uma extensão de linguagem do JavaScript", "interagindo com a DOM para colocar componentes React na mesma"], draw: Math.floor(Math.random() * 2)},
        {title:"Pergunta 2", question:["O React é __", "Usamos o npm para __"], answer:["uma biblioteca JavaScript para construção de interfaces", "gerenciar os pacotes necessários e suas dependências"], draw: Math.floor(Math.random() * 2)},
        {title:"Pergunta 3", question:["Componentes devem iniciar com __ ", "Usamos props para __"], answer:["letra maiúscula", "passar diferentes informações para componentes "], draw: Math.floor(Math.random() * 2)},
        {title:"Pergunta 4", question:["Podemos colocar __ dentro do JSX", "Usamos estado (state) para __"], answer:["expressões", "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"], draw: Math.floor(Math.random() * 2)}
    ]
    
    //const draw = Math.floor(Math.random() * 2) 

    return (
        questions.map((value, index) => <Card key = {index} title = {value.title} question = {value.question[value.draw]} answer = {value.answer[value.draw]}/>)
    )
}