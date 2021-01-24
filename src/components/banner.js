import React from 'react';
import "../css/banner.css"
import BannerLogo from '../assets/logo 3.png'
const Banner = () => {
    return ( <div className="banner">
        <div className="banner-logo">
            <img src={BannerLogo}></img>
        </div>
        <div className="banner-text home">
            <h3>Produk Bronjong UMKM Terbaik. Menerima pesanan Bronjong dengan berbagai macam ukuran dan sepesifikasi sesuai kebutuhan anda.</h3>
        </div>
        <div className="banner-cta">
            <a target="_blank" rel="noreferrer" href="https://wa.me/+6285959225893">Hubungi Kami</a>
        </div>
    </div> );
}
 
export default Banner;