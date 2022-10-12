import React from 'react';
import "./style.css";
import GroupBG from "/src/assets/images/icon-group-bg.png";
import Whatsapp from "/src/assets/images/logos_whatsapp.png";

const index = () => {
    return (
        <div class="sponsor">
            <h4 class="sponsor__title">Ingin <span class="gratis__span">Membantu</span>  Meningkatkan Literasi Anak-Anak Sekitar Kita?</h4>
            <p class="sponsor__text">Percayakan melalui kegiatan kita</p>
            <button type="submit" class="sponsor__button search">Donasi dengan Kami  <img src={GroupBG} alt="group" class="icon"/></button>
            <p class="sponsor__text">Atau</p>
            <button type="submit" class="sponsor__button group">Hubungi Kami  <img src={Whatsapp} alt="whatsapp" class="icon"/></button>
        
        </div>
    );
}

export default index;