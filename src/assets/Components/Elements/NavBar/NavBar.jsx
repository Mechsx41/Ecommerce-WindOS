import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import { CartWidget } from '../../Tools/CartWidget/CartWidget';
import { useCart } from "../Main/CartContext/CartContext";
import { InputSearch } from "../../Tools/In/InputSearch";

const NavBar = ({ setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCategory(categoryId);
  };
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <header>
        <div className="header">
          <nav className="navbar">
          <div>
            <Link to="/" className="logoName" onClick={() => handleCategorySelect('')}>
              <img className="logo" alt="logo" src="https://uca421e73002e2283ce838aa1dc6.previews.dropboxusercontent.com/p/thumb/ACdAVaR0AhlUtAPHctC__q3uubT5m7M7Pmh2W_CYPfQhCcVqedSFjRMVzkxT4iEBxwmQFOY0O9Kli-co9BXpQ01GmG8PRBofwuPz8Fqbt__dFnBUN-Bqsl7fyJF_8hrxW2fbXvNVEtvntPcyrO4Y-nqJZVrEj1PjotytPXhWPTZGcu53-ahzrnfRS7Xb8sTAu-Mxqjbc-_BXT1uvv21fnhFb1ZTl2UQ5Uv47TTohU4tX6rEw-JDnCVqm7riYZjuoLZpxIyEK8qJAdedBDk0ae2azNoeXzWQHN5HxA-yY68VVrYdDYkiNO6aVww5bjjR02qtGnhEe4Nqc90y9N1KEXVDf/p.png" />
              <h3 className="titlelogo">Electronics</h3>
            </Link>
            </div>
            <div className="navbar-center">
              <InputSearch />
            </div>
            <div className="navbar-right">
              <Link to="/checkout">
                <CartWidget />
                <span>{totalItems}</span>
                </Link>
              {/* <PositionedMenu setCategory={handleCategorySelect} /> */}
              <a href="">Iniciar sesion                
              </a>
            </div>
          </nav>
          <div className="center">
            <a className="NavCategorias" href="">TV y Audio</a>
            <a className="NavCategorias" href="">Celulares y Tecnología</a>
            <a className="NavCategorias" href="">Electrodomesticos</a>
          </div>
          <div className="background-image"></div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
