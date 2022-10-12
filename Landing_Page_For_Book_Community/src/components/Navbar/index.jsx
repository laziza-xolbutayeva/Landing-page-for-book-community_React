import React from 'react';
import "./style.css";
import logoimg from "/src/assets/images/logo.png";

const index = () => {
    return (
        <div className="nav container">
            <img src={logoimg} alt="logo" className="nav__logo"/>
            <ul className="nav__list">
                <li className="nav__list-item"><a href="#" className="nav__list-item-link">Beranda</a></li>
                <li className="nav__list-item"><a href="#" className="nav__list-item-link">Kpleksi</a></li>
                <li className="nav__list-item"><a href="#" className="nav__list-item-link">Syarat dan Ketentuan</a></li>
                <li className="nav__list-item"><a href="#" className="nav__list-item-link">Kantakt</a></li>
                <li className="nav__list-item nav__list-btn"><a href="#" className="nav__list-item-link">Masuk</a></li>
            </ul>
        </div>
    );
}

export default index;
