import React from 'react';
import "./style.css";

const index = () => {
    return (
        <div className="gallery container">
            <div className="page__header">
                <h3 className="page__header-title">Kegiatan Pojok Baca Probolinggo</h3>
                <p className="page__text">Selengkapniya</p>
            </div>
            <p className="page__text">Intip kegiatan yang telah kami selenggarakan </p>
            <div className="gallery__body">
                <div className="gallery__body-div gallery__bg1">
                    <div className="gallery__body-div-year"><span>2021</span></div>
                    <h4 className="gallery__body-div-title">Mewarnai Bersama Anak Pesisir</h4>
                    <p className="gallery__body-div-text">Kegiatan yang kami adakan pada tahun 2021</p>
                </div>
                <div className="gallery__body-div gallery__bg2">
                    <div className="gallery__body-div-year"><span>Rutin</span></div>
                    <h4 className="gallery__body-div-title">Ngelapak Tiap Malam Minggu</h4>
                    <p className="gallery__body-div-text">Kegiatan rutin yang dilakukan setiap malam minngu</p>
                </div>
                <div className="gallery__body-div gallery__bg3">
                    <div className="gallery__body-div-year"><span>2021</span></div>
                    <h4 className="gallery__body-div-title">Donasi untuk Korban Erupsi Semeru</h4>
                    <p className="gallery__body-div-text">Erupsi Gunung Semeru menggugah kita untuk</p>
                </div>
            </div>
        </div>
    );
}

export default index;