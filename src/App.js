import React from 'react';
import './App.css';
import  Nav  from "./components/nav.js";
import Banner from './components/banner';
import Layanan from './components/Layanan';
import Produk from './components/Produk';
import Proyek from './components/Proyek';
import Tentang from './components/Tentang';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Nav />
     <Banner />
     <Layanan />
     <Produk />
     <Proyek />
     <Tentang />
     <Footer />
    </div>
  );
}

export default App;
