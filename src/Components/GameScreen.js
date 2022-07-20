import React from "react";
import LogoBrand from "./LogoBrand";
import Cards from "./Cards";
import Footer from "./Footer";


export default function GameScreen() {

    const [hidesGame, setHidesGame] = React.useState("hidden")
    
    return (
        <div className = {hidesGame}>
            <LogoBrand/>
            <div className="cards">
                <Cards/>
            </div>
            <Footer/>
        </div>
    )
}

