import React from "react"
import img from "./img.png"
import "../src/index.css"

function Header() {
    return (
        <div className="header">
            <img src={img} className="logo"/>
            <h1 className="header-text">Meme Machine</h1>
            <h4 className="header-text2">by Awaneesh Soni</h4>
        </div>
    )
}

export default Header