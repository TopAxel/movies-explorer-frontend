import './Navigation.css';
import { useState } from 'react';
import accountIcon from '../images/account__icon.svg'
import { Link, NavLink, useLocation } from 'react-router-dom';

function Navigation() {
    const [showItems, setShowItems] = useState(false);

    const handleToggleMenu = () => setShowItems(!showItems);

    const location = useLocation();



    return (
        <nav className="navigation">
            <button className={`navigation__btn-menu ${location.pathname === '/' ? 'navigation__btn-menu_white' : ''}`} type="button" onClick={handleToggleMenu}></button>
            <div className={`navigation__container ${showItems ? 'navigation__container_visible' : ''}`}>
                <div className="navigation__sidebar">
                    <div className="navigation__list-container">
                        <button className="navigation__btn-close" type="button" onClick={handleToggleMenu}></button>
                        <ul className="navigation__list">
                            <li className="navigation__list-item navigation__list-item_type_main">
                                <Link to="/" className={`navigation__link ${location.pathname === '/' ? 'navigation__link_active' : ''}`}>Главная</Link>
                            </li>
                            <li className="navigation__list-item">
                                <NavLink to="/movies" className={`navigation__link ${location.pathname === '/' ? 'navigation__link_white' : ''} ${location.pathname === "/movies"
                                        ? 'navigation__link_active'
                                        : ''
                                    }`}>Фильмы</NavLink>
                            </li>
                            <li className="navigation__list-item">
                                <NavLink to="/saved-movies" className={`navigation__link ${location.pathname === '/' ? 'navigation__link_white' : ''} ${location.pathname === "/saved-movies"
                                    ? 'navigation__link_active'
                                    : ''
                                    }`}>Сохранённые фильмы</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink to="/profile" className={`navigation__link_type_profile-box ${location.pathname === '/' ? 'navigation__link_type_profile-box-green' : ''}`}>
                        <div className="account__icon-box">
                            <img className="account__icon" alt='Профиль человека' src={accountIcon} />
                        </div>
                        <span className="navigation__link navigation__link_type_profile">Аккаунт</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;