import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import Relawan from './pages/Relawan';
import Panduan from './pages/Panduan';
import Artikel from './pages/Artikel';
import DaftarIndividu from './pages/DaftarIndividu';
import Komunitas from './pages/Komunitas';
import DetailArtikel from './pages/DetailArtikel';
import Donasi from './pages/Donasi';
import DonasiLanjut from './pages/DonasiLanjut';
import KonfirmasiBayar from './pages/KonfirmasiBayar';
import LaporBanjir from './pages/LaporBanjir';
import KonfirmasiLaporBanjir from './pages/KonfirmasiLaporBanjir';
import KonfirmasiRelawan from './pages/KonfirmasiRelawan';
import ProfileRelawan from './pages/ProfileRelawan';
import ProfileKomunitas from './pages/ProfileKomunitas';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/masuk" element={<Login />} />
          <Route path="/daftar" element={<SignIn />} />
          <Route path="/relawan" element={<Relawan />} />
          <Route path="/relawan/profile-relawan" element={<ProfileRelawan />} />
          <Route path="/relawan/profile-komunitas" element={<ProfileKomunitas />} />
          <Route path="/relawan/daftar-individu" element={<DaftarIndividu />} />
          <Route path="/panduan" element={<Panduan />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/artikel/Pengertian-dan-Persiapan-Menghadapi-Banjir" element={<DetailArtikel />} />
          <Route path="/komunitas" element={<Komunitas />} />
          <Route path="/donasi" element={<Donasi />} />
          <Route path="/donasi/bayar" element={<DonasiLanjut />} />
          <Route path="/donasi/bayar/konfirmasi" element={<KonfirmasiBayar />} />
          <Route path='/lapor-banjir' element={<LaporBanjir/>} />
          <Route path='/lapor-banjir/konfirmasi' element={<KonfirmasiLaporBanjir/>} />
          <Route path='/relawan/daftar-individu/konfirmasi' element={<KonfirmasiRelawan/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
