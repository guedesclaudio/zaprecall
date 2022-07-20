import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import GameScreen from "./GameScreen"

//Para alterar as mesmas variaveis de estado em diferentes funcoes, tente declarar elas na App(), pra ver se as outras terao acesso


export default function App() {

    return (
        <div>
            <WelcomeScreen/>
            <GameScreen/>
        </div>
    )
}