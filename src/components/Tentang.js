import React from 'react';
import '../css/Tentang.css'
import worker from '../assets/worker.webp'
const Tentang = () => {
    return ( 
        <div className="tentang-container">
            <div className="tentang-row about">
                <div className="left-col">
                    <div className="text">
                        <h2>Tentang Kami</h2>
                        <p>Hidayah Bronjong merupakan UMKM yang bergerak di sektor produksi bidang kerajinan bronjong untuk keperluan konstruksi dan pembangunan. dengan menggunakan tenaga kerja yang berpengalaman kami mampu bersaing dengan kualitas fabrikasi dengan hand made bronjong yang kami tawarkan dengan harga yang kompetitif.</p>
                    </div>
                </div>
                <div className="right-col">
                    <img src={worker}></img>
                </div>
            </div>
        </div>
     );
}
 
export default Tentang;