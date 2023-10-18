import React from 'react';
import Volunteer_icon from '../assets/layanan-icon/volunteer-icon.png';
import Article_icon from '../assets/layanan-icon/article-icon.png';
import Community_icon from '../assets/layanan-icon/community-icon.png';
import Donate_icon from '../assets/layanan-icon/donate-icon.png';
import Panduan_icon from '../assets/layanan-icon/panduan-icon.png';

function Layanan() {
  return (
    <div id='layanan' className="layanan bg-cream width-100-percent height-max-content">
      <div className="container container-layanan">
        <div className="row ">
          <div className="col d-flex justify-content-center pt-5 gap-5">
            <div className="col-12 text-center mt-5">
              <h1 class="fw-bold">Layanan Kami</h1>
              <p>Relawan Banjir, Harapan di Tengah Badai </p>
            </div>
          </div>
          <div class="container px-4 py-1" id="featured-3">
            <div class="row g-4 mb-5 row-cols-1 row-cols-lg-3 justify-content-center">
              <a href="/relawan" id='menu-layanan' class="feature col text-center bg-white py-5 border-cream text-decoration-none text-dark">
                <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-cream rounded-circle p-2 mb-3 ">
                  <img src={Volunteer_icon} alt="" height="40px" />
                </div>
                <h3 class="fs-2 fw-bold">Relawan</h3>
                <p>Keberanian, solidaritas, dan kepedulian adalah yang kami butuhkan dari Anda. Ayo bergabung bersama relawan kami dan bersama-sama kita bisa melakukan hal besar.</p>
              </a>
              <a href="/panduan" id='menu-layanan' class="feature col text-center bg-white py-5 border-cream text-decoration-none text-dark">
                <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-cream rounded-circle p-2 mb-3 ">
                  <img src={Panduan_icon} alt="" height="40px" width="40px" />
                </div>
                <h3 class="fs-2 fw-bold">Panduan</h3>
                <p>Menjadi seorang relawan banjir memerlukan persiapan dan semangat yang besar. Panduan ini akan membimbing Anda melalui setiap langkah untuk menjadi relawan yang efisien.</p>
              </a>
              <a href='/artikel' id='menu-layanan' class="feature col text-center bg-white py-5 border-cream text-decoration-none text-dark">
                <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-cream rounded-circle p-2 mb-3 ">
                  <img src={Article_icon} alt="" height="40px" />
                </div>
                <h3 class="fs-2 fw-bold">Artikel</h3>
                <p>Jangan lewatkan koleksi artikel informatif kami tentang relawan banjir. Bersiaplah untuk meraih keberanian dan bergabung dengan tim pemberani yang siap bertindak!</p>
              </a>
              <a href='#donasi' id='menu-layanan' class="feature col text-center bg-white py-5 border-cream text-decoration-none text-dark">
                <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-cream rounded-circle p-2 mb-3 ">
                  <img src={Donate_icon} alt="" height="40px" />
                </div>
                <h3 class="fs-2 fw-bold">Donasi</h3>
                <p>Tiada kata terlambat untuk memberikan bantuan. Donasi Anda akan menjadi sinar harapan bagi keluarga-keluarga yang terkena dampak banjir.</p>
              </a>
              <a href='/komunitas' id='menu-layanan' class="feature col text-center bg-white py-5 border-cream text-decoration-none text-dark">
                <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-cream rounded-circle p-2 mb-3 ">
                  <img src={Community_icon} alt="" height="40px" />
                </div>
                <h3 class="fs-2 fw-bold">Komunitas</h3>
                <p>Kebersamaan adalah kunci dalam komunitas relawan banjir kami. Bersama-sama, kami membawa harapan dalam situasi paling sulit.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layanan;
