import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={
          <>
            <Header loggedIn={false} />
            <Main />
            <Footer />
          </>
        } />
        <Route exact path="/movies" element={
          <>
            <Header loggedIn={true} />
            <Movies />
            <Footer />
          </>
        } />
        <Route exact path="/saved-movies" element={
          <>
            <Header loggedIn={true} />
            <SavedMovies />
            <Footer />
          </>
        } />
        <Route exact path="/signup" element={
          <>
            <Register />
          </>
        } />
        <Route exact path="/signin" element={
          <>
            <Login />
          </>
        } />
        <Route exact path="/profile" element={
          <>
            <Header loggedIn={true} />
            <Profile />
          </>
        } />
        <Route exact path="*" element={
          <>
            <PageNotFound />
          </>
        } />
      </Routes>
    </div>
  );
};

export default App;
