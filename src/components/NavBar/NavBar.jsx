import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1>ChompiStore</h1>
      <nav>
        <ul>
          <li>Recomendations</li>
          <li>Recipes</li>
          <li>VetPet</li>
          <li><CartWidget /></li>
          
        </ul>
      </nav>
      
    </header>
  );
};

export default NavBar;
