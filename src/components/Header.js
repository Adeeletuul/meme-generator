import headerIcon from "../images/troll-face.png";
import monkas from "../images/monkas.png";

const Header = () => {
  return (
    <header className="header">
      <img src={monkas} alt="meme-generator-icon" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
    </header>
  );
};

export default Header;
