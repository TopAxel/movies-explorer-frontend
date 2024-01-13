import React from "react";
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__box">
                <p className="footer__author">&copy; 2023</p>
                <nav className="footer__nav">
                    <ul className="footer__links">
                        <li className="footer__links-item">
                            <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                        </li>
                        <li className="footer__links-item">
                            <a className="footer__link" href="https://github.com/TopAxel" target="_blank" rel="noreferrer">Github</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;