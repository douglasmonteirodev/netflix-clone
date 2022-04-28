import React from "react";
import "./Header.css";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className='header--logo'>
        <a href='/'>
          <img
            src='./assets/logo-netflix.png'
            alt='Logo-netflix'
          ></img>
        </a>
      </div>
      <div className='header--user'>
        <a href='/'>
          <img src='./assets/usuario.png' alt='usuario'></img>
        </a>
      </div>
    </header>
  );
};
