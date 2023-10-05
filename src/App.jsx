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

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/masuk" element={<Login />} />
          <Route path="/daftar" element={<SignIn/>} />
          <Route path="/relawan" element={<Relawan />}/>
          <Route path="/relawan/daftar-individu" element={<DaftarIndividu />}/>
          <Route path="/panduan" element={<Panduan />}/>
          <Route path="/artikel" element={<Artikel/>}/>
          <Route path="/komunitas" element={<Komunitas/>}/>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
