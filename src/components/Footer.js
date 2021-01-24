import React from 'react';
import '../css/Footer.css'
const Footer = () => {
    return ( 
        <div className="Footer contact">
            <div className="footer-row">
                <div className="box">
                    <h2>Alamat</h2>
                    <p>Depan Rumah Makan Lembur Kuring, No.km 9, Jl. Raya Cipanas - Cianjur, Cibeureum, Kec. Cugenang, Kabupaten Cianjur, Jawa</p>
                </div>
                <div className="box">
                    <h2>Kontak</h2>
                    <p>Telepon : <a target="_blank" rel="noreferrer" href="tel: +6285959225893">085959225893</a></p>
                    <p>WhatsApp: <a target="_blank" rel="noreferrer" href="https://wa.me/+6285959225893">Klik Untuk Chat</a></p>
                </div>
                <div className="box">
                    <h2>Sosial Media</h2>
                    <p>Facebook: </p>
                </div>
            </div>
            <div className="CopyRight">
                <p>Copyright By <a href="https://explore-creative-design.web.app/" rel="noreferrer">Explore Creative Design</a></p>
            </div>
        </div>
     );
}
 
export default Footer;