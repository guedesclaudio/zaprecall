import React from "react";
import LogoBrand from "./LogoBrand";
import Cards from "./Cards";
import Footer from "./Footer";

export default function GameScreen() {

    const [hidesGame, setHidesGame] = React.useState("")

    return (
        <div className = {hidesGame}>
            <LogoBrand/>
            <Cards/>
            <Footer/>
        </div>
    )
}