import React from 'react';
import '../css/Nav.css'

const Nav = () => {
    return ( 
        <div className="nav">
            <div className="nav-logo">Hidayah Bronjong</div>
            <div className="nav-menu">
                <ul>
                    <li>Home</li>
                    <li>Produk</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
      );
}
 
export default Nav;