import React from "react";

export default function Footer({
    counter, 
    iconResult, 
    showResult, 
    yesOrNot,
    setYesOrNot,
    userValueInput
}) {
    
    const reference = [
        {
            emoji:"./img/sadface.png", 
            title:"Putz...", 
            text:"Ainda faltam alguns... Mas não desanime!"
        },
        {
            emoji:"./img/happyface.png", 
            title:"Parabéns!", 
            text:"Você não esqueceu de nenhum flashcard!"
        }
    ]
    
    const checking = iconResult.filter(value => value === "./img/almost.png" || value === "./img/zap.png")
    if (checking.length >= userValueInput && userValueInput != "") {
        setYesOrNot(1)
    }


    return (
        <div className = "footer">
            <div className = {showResult}>
                <div>
                    <img src = {reference[yesOrNot].emoji}/>
                    <h3>
                        {reference[yesOrNot].title}
                    </h3>
                </div>
                <p>{reference[yesOrNot].text}</p>
            </div>
            <h1>{counter}/4 CONCLUÍDOS</h1>
            <div className="icons-result">
                {iconResult.map((value, index) => <img key = {index} src = {value}/>)}
            </div>
            <div className = {showResult}>
                <button>REINICIAR RECALL</button> 
            </div>
        </div>
    )
}