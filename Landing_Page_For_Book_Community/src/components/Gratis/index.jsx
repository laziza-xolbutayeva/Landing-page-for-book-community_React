import React from 'react';
import "./style.css";
import Search from "/src/assets/images/icons_search.png";
import Group from "/src/assets/images/icon-group.png";
import book1 from "/src/assets/images/book-1.png";
import book2 from "/src/assets/images/book-2.png";
import book3 from "/src/assets/images/book-3.png";
import book4 from "/src/assets/images/book-4.png";
import book5 from "/src/assets/images/book-5.png";
import book6 from "/src/assets/images/book-6.png";
import book7 from "/src/assets/images/book-7.png";

const Gratis = () => {
    return (
            <div className="gratis container">
                <p className="gratis__text"><span className="gratis__span">Pojok Baca</span> Probolinggo</p>
                <h1 className="gratis__title">Pinjam Buku Secara <span className="gratis__span">Gratis</span> untuk Masyarakat</h1>
                <div className="gratis__buttons">
                    <button type="submit" className="gratis__button search">Cari Judul Buku  <img src={Search} alt="search" className="icon"/></button>
                    <button type="submit" className="gratis__button group">Donasi dengan Kami  <img src={Group} alt="group" className="icon"/></button>
                </div>
                <div className="gratis__gallery">
                        <div className="gratis__gallery-one"><img src={book1} alt="one"/></div>
                        <div className="gratis__gallery-six"><img src={book6} alt="six"/></div>
                        <div className="gratis__gallery-two"><img src={book2} alt="two"/></div>
                        <div className="gratis__gallery-three"><img src={book3} alt="three"/></div>
                        <div className="gratis__gallery-four"><img src={book4} alt="four"/></div>
                        <div className="gratis__gallery-five"><img src={book5} alt="five"/></div>
                        <div className="gratis__gallery-seven"><img src={book7} alt="seven"/></div>
                </div>
            </div>
    );
}

export default Gratis;
