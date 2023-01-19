import React from "react"
// import memesData from "./memesData"
import "../src/index.css"

function Meme () {

    const [url, setUrl] = React.useState({
        topText: "",
        bottomText :"",
        randomImage :"https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImages] =React.useState()
    React.useEffect(function() {
        console.log("ran")
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data))
    },[url])

    function getMemeImg(){
        const memesArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const randomUrl = memesArray[randomIndex].url;
        setUrl(prevImage => ({
            ...prevImage,
            randomImage: randomUrl
        }))
    }
    function handleChange(event){
        const {name,value} = event.target
        setUrl(prevImage => ({
            ...prevImage,
            [name]: value
        }))
    }
    return (
        <main>
        <div className="form" >
            <input 
            placeholder="Top Text" 
            className="form--text" 
            type="text"
            name="topText" 
            value={url.topText}
            onChange={handleChange}
            />
            <input 
            placeholder="Bottom Text" 
            className="form--text" 
            type="text" 
            name="bottomText" 
            value={url.bottomText} 
            onChange={handleChange} 
            />
            <button className="form--button"  onClick={getMemeImg} >Get a new meme image </button>
        </div  >
            <div className="meme">
            <img src={url.randomImage} className="thatimg"/>
            <h2 className="meme--text top" >{url.topText}</h2>
            <h2 className="meme--text bottom">{url.bottomText}</h2>
            </div>

        </main>
    )
}

export default Meme