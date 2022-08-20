import "./navbar.css";
import logo from "./JuegosGratisLogo.png"

function NavBar() {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="JuegosGratisLogo" />
        <h4>JuegosGratis</h4>
      </div>
      <nav className="barraDeNavegacion">
        <ul>
          <li><a href="#"> Inicio </a></li>
          <li><a href="#"> Catálogo </a></li>
          <li><a href="#"> Atención al cliente </a></li>
          <li><a href="#"> Adquirir </a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
