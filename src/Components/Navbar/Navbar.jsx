import React, { useContext, useState } from 'react';
import './Navbar.css';
import logoelg from '../Assets/logoelg.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("nouveautés");
  const [showProducts, setShowProducts] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const handleProductsClick = () => {
    setMenu("produits");
    setShowProducts(!showProducts);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <a href="./Nouveautés"> <img src={logoelg} alt="" /> </a>
        
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("nouveautés") }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Nouveautés</Link>
          {menu === "Nouveautés" ? <hr /> : <></>}
        </li>
        <li onClick={handleProductsClick} className={menu === "produits" ? 'has-submenu' : ''}>
          <Link style={{ textDecoration: 'none' }} to=''>Produits</Link>
          {menu === "produits" ? <hr /> : <></>}
          {showProducts && (
            <ul className="sub-menu">
              <li><Link to='/chaussures'>Chaussures</Link></li>
              <li><Link to='/chemises'>Chemises</Link></li>
              <li><Link to='/pontalons'>Pantalons</Link></li>
              <li><Link to='/djackets'>Jackets</Link></li>
              <li><Link to='/accessoires'>Accessoires</Link></li>
            </ul>
          )}
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to='/nous-contacter'>Nous Contacter</Link>
          {menu === "Nous-contacter" ? <hr /> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;


/*  
<ul className="nav-links">
        <li><a href="/">Accueil</a></li>
        <li>
          <a href="/produits">Produits</a>
          <ul className="sub-menu">
            <li><a href="/produits/chaussures">Chaussures</a></li>
            <li><a href="/produits/chemises">Chemises</a></li>
            <li><a href="/produits/pantalons">Pantalons</a></li>
          </ul>
        </li>
        <li><a href="/nous-contacter">Nous Contacter</a></li>
      </ul>


*/
