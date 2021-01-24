import React from 'react';
import '../css/CardProduk.css'
const CardProduk = (props) => {
    return ( 
        <div className="cp-container">
            <div className="cp-title">
                <h2>Spesifikasi</h2>
            </div>
            <div className='cp-text'>
                <p>Dimensi: {props.data.dimensi}</p>
                <p>Tebal Kawat: {props.data.tebalkawat}</p>
                <p>Kalang: {props.data.kalang}</p>
                <p>Anyaman: {props.data.anyaman}</p>
                <p>Harga: {props.data.harga}</p>
            </div>
        </div>
     );
}
 
export default CardProduk;