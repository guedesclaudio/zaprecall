import React from "react";
import LogoBrand from "./LogoBrand";
import Cards from "./Cards";


export default function GameScreen({hidesGame}) {

    return (
        <div className = {hidesGame}>
            <LogoBrand/>
            <Cards/>
        </div>
    )
}

