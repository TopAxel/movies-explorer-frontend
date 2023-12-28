// import React from 'react';
// import './Header.css';
// import { Link } from 'react-router-dom';
// import logo from '../images/header_logo.svg';

// function Header() {
//     return (
//         <header className="header">
//             <a href="/"><img className="header__logo" src={logo} alt="логотип Movies Explorer" /></a>
//             <nav className="header__auth">
//                 <Link className="header__link" type="button">Регистрация</Link>
//                 <Link className="header__button" type="button">Войти</Link>
//             </nav>
//         </header>
//     );
// };

// export default Header;


import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../images/header_logo.svg';
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';


const Header = ({ loggedIn }) => {
  return (
    <header className={`header ${!loggedIn ? 'header_type_auth' : ''}`}>
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Логотип Movies Explorer"></img>
      </Link>
      {!loggedIn && <NavAuth />}
      {loggedIn && <Navigation />}
    </header>
  );
};

export default Header;