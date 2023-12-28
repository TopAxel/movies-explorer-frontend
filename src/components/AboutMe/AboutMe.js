import React from 'react'
import './AboutMe.css'
import avatar from '../images/avatar.jpg'

function AboutMe() {
    return (
        <section className="about__me">
            <h2 className="about__me-header">Студент</h2>
            <div className="about__me-box">
                <div className="about__me-info">
                    <h3 className="about__me-name">Виталий</h3>
                    <p className="about__me-job">Фронтенд-разработчик, 30 лет</p>
                    <p className="about__me-description">
                        Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена
                        и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
                    </p>
                    <ul className="about__me-links">
                        <li><a className="about__me-link" href="https://github.com/TopAxel" target="_blank" rel="noreferrer">Github</a></li>
                    </ul>
                </div>
                <img className="about__me-avatar" src={avatar} alt="фотография студента" />
            </div>
        </section>
    );
};

export default AboutMe;