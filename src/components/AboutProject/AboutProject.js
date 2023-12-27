import React from 'react';
import './AboutProject.css'

function AboutProject() {
    return (
        <section className="about__project" id="about-project">
            <h2 className="about__project-header">О проекте</h2>
            <div className="about__project-box">
                <div className="about__project-info">
                    <h3 className="about__project-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about__project-tex">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__project-info">
                    <h3 className="about__project-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__project-tex">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__project-box">
                <div className="about__weeks">
                    <h4 className="about__weeks-title">1 неделя</h4>
                    <p className="about__weeks-text">Back-end</p>
                </div>
                <div className="about__weeks">
                    <h4 className="about__weeks-title about__weeks-title_gray">4 недели</h4>
                    <p className="about__weeks-text">Front-end</p>
                </div>
            </div>
        </section>
    );
};

export default AboutProject;