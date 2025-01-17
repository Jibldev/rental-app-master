import LogoKasa from "../images/LOGO.png";
import "../styles/header.sass";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={LogoKasa} alt="Logo Kasa" />
      <nav className="nav">
        <a href="/" className="navLink">
          Accueil
        </a>
        <a href="/about" className="navLink">
          A Propos
        </a>
      </nav>
    </header>
  );
};

export default Header;
