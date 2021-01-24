import React from 'react';
import '../css/Produk.css'

import Bronjong from '../assets/bronjong.webp'
import CardProduk from './CardProduk';
import ProdukData from '../produk.js'
const Produk = () => {
    let newdata = ''
    return ( 
    <div className="produk-container">
        <div className="produk-title">
            <h1>Produk Kami</h1>
        </div>
        <div className="produk-banner">
            <img alt="Bronjong" src={Bronjong}></img>
            <h2>Bronjong Manual</h2>
        </div>
        <div className="produk-card produk">
            {newdata = ProdukData.bronjong.map(prod => {
                return <CardProduk key={prod.id} data={prod} />
            })}
        </div>

    </div> );
}
 
export default Produk;