import headerIcon from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={headerIcon} alt=""
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}