import React from "react";


function Card({
    title,
    question,
    answer,
    counter,
    setCounter,
    iconResult,
    setIconResult,
    setShowResult,
    setYesOrNot
}) {

    const [hidesCardTitle, setHidesCardTitle] = React.useState("card-title")
    const [showQuestion, setShowQuestion] = React.useState("hidden")
    const [showAnswer, setShowAnswer] = React.useState("hidden")
    const [titleState, setTitleState] = React.useState("")
    const [color, setColor] = React.useState()
    const [iconAnswer, setIconAnswer] = React.useState("./img/arrow.png")
    const [checkQuestion, setCheckQuestion] = React.useState(false)
    const red = {color: "#FF3030"}
    const green = {color: "#2FBE34"}
    const yellow =  {color: "#FF922E"}
    
    
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
        setCounter(counter+1)

        if (counter === 3) {
            setShowResult("result")
        }

        if (type === "not") {
            setColor(red)
            setIconAnswer("./img/not.png")
            setIconResult([...iconResult, "./img/not.png"])
            setYesOrNot(0)
        }
        if (type === "almost") {
            setColor(yellow)
            setIconAnswer("./img/almost.png")
            setIconResult([...iconResult, "./img/almost.png"])
        }
        if (type === "zap") {
            setColor(green)
            setIconAnswer("./img/zap.png")
            setIconResult([...iconResult, "./img/zap.png"])
        }
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

export default function Cards({
    counter, 
    setCounter, 
    iconResult, 
    setIconResult, 
    showResult, 
    setShowResult, 
    yesOrNot, 
    setYesOrNot,
    userValueInput,
    userValueSelect
}) {

    const draw = Math.floor(Math.random() * 2)
    
    const questions = [[
        {
            title:"Pergunta 1",
            question:["O que é JSX?", "O ReactDOM nos ajuda __"], 
            answer:["Uma extensão de linguagem do JavaScript", "interagindo com a DOM para colocar componentes React na mesma"], 
            draw
        },
        {
            title:"Pergunta 2",
            question:["O React é __", "Usamos o npm para __"],
            answer:["uma biblioteca JavaScript para construção de interfaces", "gerenciar os pacotes necessários e suas dependências"], 
            draw
        },
        {
            title:"Pergunta 3", 
            question:["Componentes devem iniciar com __ ", "Usamos props para __"], 
            answer:["letra maiúscula", "passar diferentes informações para componentes "], 
            draw
        },
        {
            title:"Pergunta 4", 
            question:["Podemos colocar __ dentro do JSX", "Usamos estado (state) para __"], 
            answer:["expressões", "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"], 
            draw
        }
    ],[
        {
            title:"Pergunta 1",
            question:["O que é HTML?", "Uma div é __"], 
            answer:["linguagem de marcação utilizada na Web", "um elemento de divisão"], 
            draw
        },
        {
            title:"Pergunta 2",
            question:["Como pegamos dados do usuário?", "É possível gerar um formulário em HTML?"],
            answer:["através de inputs", "Sim"], 
            draw
        },
        {
            title:"Pergunta 3", 
            question:["Como importamos estilo para o HTML?", "É boa prática estilizar o HTML diretamente?"], 
            answer:["Com a tag <link/>", "Não"], 
            draw
        },
        {
            title:"Pergunta 4", 
            question:["Quando foi criado o HTML?", "Por que HTML não é uma linguagem de programação?"], 
            answer:["1990", "Pois não possui lógica e não cria funcionalidade dinâmica"], 
            draw
        }
    ]]
    
    if (userValueSelect === "JSX") {
        return (
            <div className="cards">
                {
                questions[0].map((value, index) => 
                <Card userValueInput = {userValueInput} yesOrNot = {yesOrNot} setYesOrNot = {setYesOrNot} 
                showResult = {showResult} setShowResult = {setShowResult} 
                counter = {counter} setCounter = {setCounter} iconResult = {iconResult} 
                setIconResult = {setIconResult} key = {index} title = {value.title} 
                question = {value.question[value.draw]} answer = {value.answer[value.draw]} />)
                }
            </div>
        )
    }
    return (
        <div className="cards">
            {
            questions[1].map((value, index) => 
            <Card userValueInput = {userValueInput} yesOrNot = {yesOrNot} setYesOrNot = {setYesOrNot} 
            showResult = {showResult} setShowResult = {setShowResult} 
            counter = {counter} setCounter = {setCounter} iconResult = {iconResult} 
            setIconResult = {setIconResult} key = {index} title = {value.title} 
            question = {value.question[value.draw]} answer = {value.answer[value.draw]} />)
            }
        </div>
    )
}