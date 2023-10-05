import React from 'react';
import Logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand text-white" href="#">
          <img src={Logo} alt="Tanggap Banjir" className="logo-brand" /> Tanggapbanjir+
        </a>
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-3 mb-2 mb-lg-0 width-100-percent d-flex justify-content-center">
            <li className="nav-item">
              <a className="nav-link text-white active" aria-current="page" href="/">
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/#layanan">
                Layanan
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                Kontak
              </a>
            </li>
          </ul>
          <a className="text-decoration-none text-white text-black me-3" href="/daftar">
            Daftar
          </a>
          <a className="btn btn-white py-1 px-3 " type="submit" href="/masuk">
            Masuk
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
