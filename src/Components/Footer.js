import React from "react";
import sadface from "./img/sadface.png"
import happyface from "./img/happyface.png"
import almost from "./img/almost.png"
import zap from "./img/zap.png"

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
            emoji:sadface, 
            title:"Putz...", 
            text:"Ainda faltam alguns... Mas não desanime!"
        },
        {
            emoji:happyface, 
            title:"Parabéns!", 
            text:"Você não esqueceu de nenhum flashcard!"
        }
    ]
    
    const checking = iconResult.filter(value => value === almost || value === zap)
    
    if (checking.length >= userValueInput) {
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
        </div>
    )
}

/*
<div className = {showResult}>
    <button>REINICIAR RECALL</button> 
</div>
*/