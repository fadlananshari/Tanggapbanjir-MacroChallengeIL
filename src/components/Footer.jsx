import React from 'react';
import Telpon from '../assets/tlp.png';
import Gmail from '../assets/sosmed/gmail.png';
import Facebook from '../assets/sosmed/facebook.png';
import Instagram from '../assets/sosmed/instagram.png';
import Youtube from '../assets/sosmed/youtube.png';
import Clock_icon from '../assets/clock-icon.png';
import Map_icon from '../assets/map.png';

function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <footer className="container py-5">
          <div className="d-flex justify-content-between row">
            <div className="col-12 col-md-4 mb-3">
              <h5 className="text-white mb-2">
                <span className="border-bottom border-white border-4">Tentang</span> Kita
              </h5>
              <p className="text-white mt-4 fs-12px">Bukan hanya tindakan, kita adalah cermin hati yang tulus. Bersama-sama, kita menjadikan dunia ini tempat yang lebih baik bagi mereka yang membutuhkan.</p>
            </div>

            <div className="col-12 col-md-4 mb-3">
              <h5 className="text-white ms-md-4">Kontak</h5>
              <ul className="nav flex-column mt-4">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-12px text-white p-0 d-flex gap-1">
                    <img className="icon-15px map-icon" src={Map_icon} alt="" />
                    Jalan Mawar No.01, Jakarta
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-12px text-white p-0 d-flex gap-1">
                    <img className="icon-15px" src={Telpon} alt="" />
                    0812-8764-8757
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-12px text-white p-0 d-flex gap-1">
                    <img className="icon-15px" src={Gmail} alt="" />
                    namawebsite@gmail.com
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link fs-12px text-white p-0 d-flex gap-1">
                    <img className="icon-15px" src={Clock_icon} alt="" />
                    Senin-Minggu (24 Jam)
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-3 mb-3">
              <h5 className="text-white">Tags</h5>
              <div className="d-flex justify-content-start gap-1 row row-cols-2">
                <p className="col bg-white fs-12px py-1 px-2 width-max-content rounded m-0">#KitaPeduli</p>
                <p className="col bg-white fs-12px py-1 px-2 width-max-content rounded m-0">#BantuBanjir</p>
                <p className="col bg-white fs-12px py-1 px-2 width-max-content rounded m-0">#AksiKemanusiaan</p>
                <p className="col bg-white fs-12px py-1 px-2 width-max-content rounded m-0">#RelawanMaju</p>
                <p className="col bg-white fs-12px py-1 px-2 width-max-content rounded m-0">#RelawanSiaga</p>
                <p className="col bg-white fs-12px py-1 px-2 width-max-content rounded m-0">#DonasiKemanusiaan</p>
                <p className="col bg-white fs-12px py-1 px-2 width-max-content rounded m-0">#BersamaKitaBisa</p>
                <p className="col bg-white fs-12px py-1 px-2 width-max-content rounded m-0">#AksiSahabat</p>
                <p className="col bg-white fs-12px py-1 px-2 width-max-content rounded m-0">#SolidaritasTanpaBatas</p>
              </div>
            </div>
          </div>

          <div id='contact' className="pt-4 mt-4 border-top border-4 text-white">
            <h5 className="text-center mb-4 fw-bold">Hubungi Kami</h5>
            <div className="d-lg-flex justify-content-center gap-4">
              <div className="d-flex gap-2 align-items-center mb-2">
                <img src={Gmail} alt="" /> tanggapbanjir@gmail.com
              </div>
              <div className="d-flex gap-2 align-items-center mb-2">
                <img src={Youtube} alt="" /> tanggapbanjir123
              </div>
              <div className="d-flex gap-2 align-items-center mb-2">
                <img src={Instagram} alt="" /> tanggapbanjir.123
              </div>
              <div className="d-flex gap-2 align-items-center mb-2">
                <img src={Facebook} alt="" /> tanggapbanjir_123
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="text-center bg-end-footer width-100-percent mb-0">
        <small className="mb-0 text-white">&copy; 2023 Company, Inc. All rights reserved.</small>
      </div>
    </>
  );
}

export default Footer;
