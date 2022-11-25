
import { useEffect, useState } from "react";

export default function Meme() {

     const [meme, setMeme]= useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1ur9b0.jpg"
     })
    
    const [allMemes, setAllMemes] = useState([]); 

    useEffect(( )=> {
       fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes))
       }, [])

    const handleChange = (event) => {
        const { name, value } = event.target
        setMeme(prevMeme => ({...prevMeme, [name]: value}))
    }

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }
        ));
    }

    return (
        <main>
            <div className="form">
                <input className="form--input"
                    type="text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input className="form--input"
                    type="text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="form--button"
                    onClick={getMemeImage}>Get a new meme image 🖼️
                </button>
            </div>
             <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            
            </div>
        </main>
    )
}