import React from "react";

export default function Footer({
    counter, 
    iconResult, 
    showResult, 
    yesOrNot
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

    //iconResult = iconResult.split(" ")
    
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
                <button onClick = {() => window.location.reload()}>REINICIAR RECALL</button>
            </div>
        </div>
    )
}