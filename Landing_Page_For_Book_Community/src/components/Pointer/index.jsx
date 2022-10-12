import React from 'react';
import "./style.css";
import pointer from "/src/assets/images/pointer.png";

const index = () => {
    return (
        <div className="pointer container">
            <div className="pointer__box">
                <img src={pointer} alt="pointer"/>
                <div className="pointer__info">
                    <h3 className="pointer__box-title">500+</h3>
                    <p className="pointer__box-text">Judul Buku</p>
                </div>
            </div>
            <div className="pointer__box">
                <img src={pointer} alt="pointer"/>
                <div className="pointer__info">
                    <h3 className="pointer__box-title">$0</h3>
                    <p className="pointer__box-text">Gratis Peminjaman</p>
                </div>
            </div>
            <div className="pointer__box">
                <img src={pointer} alt="pointer"/>
                <div className="pointer__info">
                    <h3 className="pointer__box-title">5</h3>
                    <p className="pointer__box-text">Kegiatan Rutin</p>
                </div>
            </div>
        </div>
    );
}

export default index;