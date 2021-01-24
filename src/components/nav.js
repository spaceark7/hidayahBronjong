import React, { useEffect } from 'react';
import '../css/Nav.css'
import NavLogo from '../assets/nav-logo.png';
import {TiThMenu} from 'react-icons/all'
const Nav = () => {
   
    useEffect(() => {
        let menu1 = document.querySelector(".menu1");
        let menu2 = document.querySelector('.menu2');
        let menu3 = document.querySelector('.menu3');
        let menu4 = document.querySelector('.menu4');

        let mmenu1 = document.querySelector(".mmenu1");
        let mmenu2 = document.querySelector('.mmenu2');
        let mmenu3 = document.querySelector('.mmenu3');
        let mmenu4 = document.querySelector('.mmenu4');

        let m_nav = document.querySelector('.mobile-menu')
        let isOpened = m_nav.style.transform;

        menu1.addEventListener("click", function() {
            
            document.querySelector(".banner").scrollIntoView(true);
    
        })
        menu2.addEventListener("click", function() {
            document.querySelector(".produk-container").scrollIntoView(true);
        
        })
        menu3.addEventListener("click", function() {
            document.querySelector(".tentang-container").scrollIntoView(false);
        })
        menu4.addEventListener("click", function() {
            document.querySelector(".contact").scrollIntoView(false);
        })




        let mobile_menu = document.querySelector(".toggle");
        mobile_menu.addEventListener("click", function() {
            console.log("mnav is ", m_nav.style)
            mobile_menu.style.transform = "rotate(90deg)"
            m_nav.style.transform = "translateX(0%)"
            
            
        })

        mmenu1.addEventListener("click", function() {
            m_nav.style.transform = "translateX(-100%)"
            document.querySelector(".banner").scrollIntoView(true);
            mobile_menu.style.transform = "rotate(0deg)"
        })
        mmenu2.addEventListener("click", function() {
            m_nav.style.transform = "translateX(-100%)"
            document.querySelector(".produk-container").scrollIntoView(true);
            mobile_menu.style.transform = "rotate(0deg)"
            
        })
        mmenu3.addEventListener("click", function() {
            m_nav.style.transform = "translateX(-100%)"
            document.querySelector(".tentang-container").scrollIntoView(false);
            mobile_menu.style.transform = "rotate(0deg)"
        })
        mmenu4.addEventListener("click", function() {
            m_nav.style.transform = "translateX(-100%)"
            document.querySelector(".contact").scrollIntoView(false);
            mobile_menu.style.transform = "rotate(0deg)"
        })

        m_nav.addEventListener('click', function() {
    
                m_nav.style.transform = "translateX(-100%)"
                mobile_menu.style.transform = "rotate(0deg)"
            
        })

    })

    



    
    return ( 
        <div className="nav">
            <div className="nav-logo"> 
                <img alt="logo image" src={NavLogo}></img>
                <p>Hidayah Bronjong</p>   
            </div>
            <div className="nav-menu">
                <ul>
                    <li className="menu1">Home</li>
                    <li className="menu2" >Produk</li>
                    <li className="menu3" >About</li>
                    <li className="menu4" >Contact</li>
                </ul>
                <div  className="toggle">
                    <TiThMenu />
                </div>
            </div>

            <div className="mobile-menu">
            <ul>
                    <li className="mmenu1">Home</li>
                    <li className="mmenu2">Produk</li>
                    <li className="mmenu3">About</li>
                    <li className="mmenu4">Contact</li>
                </ul>
            </div>
        </div>
      );
}
 
export default Nav;