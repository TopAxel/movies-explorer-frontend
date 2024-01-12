import './Profile.css';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';

function Profile({ onSignOut, openPopup }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState(currentUser.name);
    const [lastName, setLastName] = React.useState(currentUser.name);
    const [email, setEmail] = React.useState(currentUser.email);
    const [lastEmail, setLastEmail] = React.useState(currentUser.email);
    const [isSaveButtonVisible, setSaveButtonVisible] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        mainApi.updateUserInfo({ name, email }).then(() => {
            setSaveButtonVisible(false);
            setLastName(name);
            setLastEmail(email);
            setErrorMessage('');
            openPopup('Данные успешно изменены!');
        })
            .catch(() => {
                setErrorMessage(`При обновлении профиля произошла ошибка.`);
            });
    };

    function handleNameChange(evt) {
        const value = evt.target.value;
        setName(value);

        if (value !== lastName) {
            setSaveButtonVisible(true);
        } else {
            setSaveButtonVisible(false);
        }
    }

    function handleEmailChange(evt) {
        const value = evt.target.value;
        setEmail(value);

        if (value !== lastEmail) {
            setSaveButtonVisible(true);
        } else {
            setSaveButtonVisible(false);
        }
    }

    return (
        <section className="profile">
            <form className="profile__form" onSubmit={handleSubmit}>
                <h3 className="profile__greeting">Привет, {name}!</h3>
                <div className="profile__inputs">
                    <p className="profile__text">Имя</p>
                    <div className="profile__area profile__area_type_name">
                        <input className="profile__settings" value={name} onChange={handleNameChange}
                            disabled={!isSaveButtonVisible}
                        />
                    </div>
                    <div className="profile__area profile__area_type_email">
                        <input className="profile__settings" value={email} onChange={handleEmailChange}
                            disabled={!isSaveButtonVisible}
                        />
                    </div>
                    <p className="profile__text">E-mail</p>
                </div>
                {errorMessage && (
                    <p className="profile__error">{errorMessage}</p>
                )}
                {isSaveButtonVisible && (
                    <button className="profile__button profile__button-save" disabled={!isSaveButtonVisible || !name || !email} 
                        type='submit' >
                        Сохранить
                    </button>
                )}
                {!isSaveButtonVisible && (
                    <>
                        <button className="profile__button" onClick={() => setSaveButtonVisible(true)} >
                            Редактировать
                        </button>
                        <button className="profile__link" type="button" onClick={onSignOut}>
                            Выйти из аккаунта
                        </button>
                    </>

                )}
            </form>
        </section>
    );
};

export default Profile;