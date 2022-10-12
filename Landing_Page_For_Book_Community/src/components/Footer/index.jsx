import React from 'react';
import "./style.css";
import logoimg from "/src/assets/images/logo.png";
import Ins from "/src/assets/images/inst.png";
import Facee from "/src/assets/images/facee.png";
import Tube from "/src/assets/images/you tube.png";

const index = () => {
    return (
        <div>
            <div class="container">
                <div class="footer__body">
                    <div class="footer__logo">
                        <div class="footer_logo-frame">
                            <img src={logoimg} alt="logo" />
                            <p class="footer__logo-text">Pojok Baca Probolinggo</p>
                        </div>
                        <p class="footer__logo-icon">
                            <img src={Ins} alt="ins" />
                            <img src={Facee} alt="face" />
                            <img src={Tube} alt="tube" />
                        </p>
                    </div>
                    <div class="footer__page">
                        <h6 class="footer__network-title">Kontak</h6>
                        <p class="footer-page--">Email</p>
                        <p class="footer-page--">Alamat</p>
                        <p class="footer-page--">No. Rekening</p>
                    </div>
                    <div class="footer__network">
                        <h6 class="footer__network-title">Tentang Kami</h6>
                        <p class="footer-page--"> Umum</p>
                    </div>
                    <div class="footer__contact">
                        <h6 class="footer__network-title">Galery</h6>
                        <p class="footer-page--">Kegiatan 2018</p>
                        <p class="footer-page--">Kegiatan 2019</p>
                        <p class="footer-page--">Kegiatan 2020</p>
                        <p class="footer-page--">Kegiatan 2021</p>
                    </div>
                </div>
            </div>
            <div class="end">
                <p class="end-footer">&copy; Pojok Baca Probolinggo 2022</p>
            </div>
        </div>
    );
}

export default index;