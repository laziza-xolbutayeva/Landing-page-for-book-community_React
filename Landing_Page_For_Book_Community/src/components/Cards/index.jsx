import React from 'react';
import "./style.css";
import Card1 from "/src/assets/images/card1.png";
import Card2 from "/src/assets/images/card2.png";

const Cards = () => {
    return (
        <div className="cards">
            <div className="container">
                <h2 className="cards__title">Kenapa Kita <span className="gratis__span">Harus</span> Membaca Buku?</h2>
                <div className="cards__one">
                    <p className="cards__one-text">“Aku rela dipenjara asalkan <strong>bersama buku</strong>, karena dengan buku <br/><strong> aku bebas</strong>”</p>
                    <div className="cards__one-card">
                        <img src={Card1} alt="Mohammad Hatta"/>
                        <div className="cards__one-card-box">
                            <h3>Mohammad Hatta</h3>
                            <p>Wakil Presiden Indonesia Pertama</p>
                        </div>
                    </div>
                </div>
                <div className="cards__one cards__tab">
                    <p className="cards__one-text">“Cuma perlu <strong>satu buku</strong> satu buku untuk jatuh cinta pada membaca, Cari <br/>Buku itu! <strong>Mari jatuh cinta</strong> !</p>
                    <div className="cards__one-card">
                        <img src={Card2} alt="Mohammad Hatta"/>
                        <div className="cards__one-card-box">
                            <h3>Najwa Shihab</h3>
                            <p>Duta Membaca</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;