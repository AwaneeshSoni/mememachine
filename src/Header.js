import React from "react"
import img from "./img.png"
import "../src/index.css"

function Header () {
    return (
        <div>
            <img src={img} />
            <h1>Meme Machine</h1>
            <h4>by Awaneesh Soni</h4>
        </div>
    )
}

export default Header