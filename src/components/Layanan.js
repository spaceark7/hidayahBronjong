import React from 'react';
import '../css/Layanan.css'
import { GrCodeSandbox, IoConstruct, FaTruck } from "react-icons/all";

const Layanan = () => {
    return ( 
    <div className="Layanan-container">
        <div className="layanan-text">
            <h2><span>Layanan</span> Kami</h2>
            <p>Kami siap membantu proyek anda untuk memudahkan dan memerikan solusi tepat untuk konstruksi/proyek anda.</p>
        </div>
        <div className="layanan-image">
            <div className="card-container">
                <div className="card-image">
                    <GrCodeSandbox />
                </div>
                <div className="card-text">
                    <h2>Bronjong</h2>
                    <p>Kami Menyediakan Berbagai Macam Ukuran</p>
                </div>
            </div>

            <div className="card-container">
                <div className="card-image">
                    <IoConstruct />
                </div>
                <div className="card-text">
                    <h2>Jasa Pasang</h2>
                    <p>Untuk Memudahkan Anda. Kami menyediakan jasa pemasangan</p>
                </div>
            </div>

            <div className="card-container">
                <div className="card-image">
                    <FaTruck />
                </div>
                <div className="card-text">
                    <h2>Siap Antar</h2>
                    <p>Cepat & Tepat. Prioritas kami dalam pengiriman</p>
                </div>
            </div>

        </div>
    </div> );
}
 
export default Layanan;