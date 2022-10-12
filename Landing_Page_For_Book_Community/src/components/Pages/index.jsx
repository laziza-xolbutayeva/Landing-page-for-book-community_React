import React from 'react';
import "./style.css";
import Card3 from "/src/assets/images/card3.png";
import Card4 from "/src/assets/images/card4.png";

const index = () => {
    return (
        <div className="page container">
            <div className="page__header">
                <h3 className="page__header-title">Apa Kata Mereka?</h3>
                <p className="page__text">Selengkapniya</p>
            </div>
            <p className="page__text">
                Mereka yang telah menjadi pengunjung tetap kami
            </p>
            <div className="page__card">
                <p className="page__text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do<br/> amet sint. Velit officia consequat duis enim velit mollit. Exercitation<br/> veniam consequat sunt nostrud amet.
                </p>
                <div className="page__cards">
                    <img src={Card3} alt="Mohammad Hatta"/>
                    <div className="page__cards-box">
                        <h3>Guy Hawkins</h3>
                        <p className="page__text">32 Tahun, Karyawan</p>
                    </div>
                </div>
            </div>
            <div className="page__card page__two-card">
                <p className="page__text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do<br/> amet sint. Velit officia consequat duis enim velit mollit. Exercitation<br/> veniam consequat sunt nostrud amet.
                </p>
                <div className="page__cards">
                    <img src={Card4} alt="Mohammad Hatta"/>
                    <div className="page__cards-box">
                        <h3>Brooklyn Simmons</h3>
                        <p className="page__text">20 Tahun, Mahasiswa</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;