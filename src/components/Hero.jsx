import React from 'react';
import Hero_img from '../assets/hero-img.png';
import Navigate from '../assets/navigate.png';
import Relawan from '../assets/relawan.png';
import Statistik from '../assets/stats.png';


function Hero() {
  return (
    <div id='hero' className="hero">
      <div className="hero-bg bg-green pos-fixed width-100-percent height-200vh"></div>

      <div className="container">
        <div className="mt-20px col-12 col-xl-7 col-lg-9 pt-5">
          <h1 className="fw-bolder fs-50px mb-4 fs-40px">Kami Siap Jadi Cahaya di Tengah Gelapnya Banjir!</h1>
          <p className="fs-30px fs-4 fw-light mb-4">
            <span className="fw-bold">Relawan banjir</span> sigap dan penuh semangat siaga membantu masyarakat terdampak.
          </p>
          <div>
            <a href="/artikel" className="btn btn-white btn-lg">
              Baca Berita
            </a>
            <img height="50px" src={Navigate} alt="" />
          </div>
        </div>
        <div className="width-100-percent pos-fixed d-none z-min1 top-60px d-lg-flex">
          <img src={Hero_img} alt="Banjir" className="hero-img ms-auto" />
        </div>
      </div>

      <div className="z-index-2 container mt-80px d-flex justify-content-center">
        <div className="bg-white col-11 col-lg-7 d-flex justify-content-between px-2 px-md-5 rounded shadow">
          <div className="d-flex p-2 gap-4 justify-content-center align-items-center">
            <img src={Relawan} alt="" height="50px" />
            <div>
              <h3 className='fw-bold'>1000+</h3>
              <h3>Relawan</h3>
            </div>
          </div>

          <div className="d-flex p-2 gap-4 justify-content-center align-items-center">
            <img src={Statistik} alt="" height="50px" />
            <div>
              <h3 className='fw-bold'>750+</h3>
              <h3>Aktivitas</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
