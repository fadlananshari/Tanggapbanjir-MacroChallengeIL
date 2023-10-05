import React from 'react';
import Panduan_img from '../assets/panduan-img.png';
import Eye_icon from '../assets/eye-icon.png';
import Web_icon from '../assets/web-icon.png';
import Clock_icon from '../assets/clock-icon.png';

function Panduan() {
  return (
    <div id='panduan' class="album py-5 bg-cream">
      <div class="container text-center">
        <div class="mb-5">
          <h1 class="fw-bold">Panduan Relawan Kita</h1>
          <p>Bersama Kita Berubah Menjadi Lebih Baik</p>
        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
          <div class="col">
            <div class="card shadow-sm">
              <img src={Panduan_img} alt="" class="rounded" />
              <div class="card-body">
                <h4 class="fs-6 fw-bold">Tata Cara Menjadi Relawan Banjir</h4>
                <p class="card-text">Jadilah relawan yang baik dan sigap dalam melaksanakan tugas.</p>
                <div class="text-start d-block gap-0">
                  <div>
                    <small className="text-secondary">
                      {' '}
                      <img src={Web_icon} alt="" className="icon-15px" /> Tanggapbanjir.com
                    </small>
                  </div>
                  <div>
                    <small className="text-secondary">
                      <img src={Eye_icon} alt="" className="icon-15px icon-eye" /> 38 rb x ditonton
                    </small>
                  </div>
                  <div>
                    <small className="text-secondary">
                      {' '}
                      <img src={Clock_icon} alt="" className="icon-15px" /> 25 September 2023
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img src={Panduan_img} alt="" class="rounded" />
              <div class="card-body">
                <h4 class="fs-6 fw-bold">Tata Cara Menjadi Relawan Banjir</h4>
                <p class="card-text">Jadilah relawan yang baik dan sigap dalam melaksanakan tugas.</p>
                <div class="text-start d-block gap-0">
                  <div>
                    <small className="text-secondary">
                      {' '}
                      <img src={Web_icon} alt="" className="icon-15px" /> Tanggapbanjir.com
                    </small>
                  </div>
                  <div>
                    <small className="text-secondary">
                      <img src={Eye_icon} alt="" className="icon-15px icon-eye" /> 38 rb x ditonton
                    </small>
                  </div>
                  <div>
                    <small className="text-secondary">
                      {' '}
                      <img src={Clock_icon} alt="" className="icon-15px" /> 25 September 2023
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img src={Panduan_img} alt="" class="rounded" />
              <div class="card-body">
                <h4 class="fs-6 fw-bold">Tata Cara Menjadi Relawan Banjir</h4>
                <p class="card-text">Jadilah relawan yang baik dan sigap dalam melaksanakan tugas.</p>
                <div class="text-start d-block gap-0">
                  <div>
                    <small className="text-secondary">
                      {' '}
                      <img src={Web_icon} alt="" className="icon-15px" /> Tanggapbanjir.com
                    </small>
                  </div>
                  <div>
                    <small className="text-secondary">
                      <img src={Eye_icon} alt="" className="icon-15px icon-eye" /> 38 rb x ditonton
                    </small>
                  </div>
                  <div>
                    <small className="text-secondary">
                      {' '}
                      <img src={Clock_icon} alt="" className="icon-15px" /> 25 September 2023
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#" class="btn btn-white btn-hover-green py-2 px-4">
          Video Lainnya &#10140;
        </a>
      </div>
    </div>
  );
}

export default Panduan;
