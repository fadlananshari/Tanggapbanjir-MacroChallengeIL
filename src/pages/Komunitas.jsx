import React from 'react';
import Relawan from '../assets/relawan-img.png';
import Poll from '../assets/poll.png';
import Emot from '../assets/emot.png';
import Foto from '../assets/foto.png';
import Video from '../assets/video.png';
import Relawan2 from '../assets/relawan2-img.png';
import Relawan3 from '../assets/relawan3-img.png';
import Like from '../assets/like.png';
import Chat from '../assets/share.png';
import Share from '../assets/chat.png';
import Noah_img from '../assets/noah-img.png';


function Komunitas() {
  return (
    <div className="bg-green py-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col bg-cream p-2 rounded pe-5">
            <div>
              <h3 className="px-3 py-1 bg-green fw-bold width-max-content rounded">Komunitas</h3>
              <p>Ceritakan pengalamanmu, inspirasi, serta upaya kita bersama untuk melawan banjir.</p>
            </div>
            <div className="d-flex gap-3">
              <img src={Relawan} alt="" width="100px" height="100px" />
              <div className="bg-white width-100-percent p-1 rounded">
                <textarea name="" id="" className="border-0 width-100-percent" placeholder="Apa yang terjadi?"></textarea>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-end">
                    <img src={Foto} alt="" width="20px" className="me-1" />
                    <img src={Video} alt="" width="20px" className="me-1" />
                    <img src={Emot} alt="" width="20px" className="me-1" />
                    <img src={Poll} alt="" width="20px" className="me-1" />
                  </div>

                  <a href="" className="btn btn-green rounded rounded-5 fw-bold px-4">
                    Posting
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="m-1">Lihat Semua Kisah Menarik di Sini!</p>
          <div className='p-0'>
            <div className="col-12 bg-cream d-flex rounded p-2 gap-3 mb-2">
              <img src={Relawan2} alt="" width="100px" height="100px" />
              <div>
                <div className="d-flex justify-content-between">
                  <p className="mb-1">
                    <span className="fw-bold">Olivia</span> @olivia125
                  </p>
                  <small className="text-secondary me-1">&#126; 3 menit yang lalu</small>
                </div>
                <p>
                  Relawan adalah cahaya di tengah badai banjir. Bersama-sama, kita berusaha untuk menerangi dan menyelamatkan masyarakat yang terkena dampak. 💪🌊 <br />
                  <span className="fw-bold">#RelawanAksi #RelawanSIaga</span>
                </p>
                <div className="text-end">
                  <img src={Like} alt="" width="20px" heigth="20px" className="me-3" />
                  <img src={Chat} alt="" width="20px" heigth="20px" className="me-3" />
                  <img src={Share} alt="" width="20px" heigth="20px" className="me-3" />
                </div>
              </div>
            </div>
            <div className="col-12 bg-cream d-flex rounded p-2 gap-3 mb-2">
              <img src={Relawan3} alt="" width="100px" height="100px" />
              <div>
                <div className="d-flex justify-content-between">
                  <p className="mb-1">
                    <span className="fw-bold">Noah</span> @noarft.11
                  </p>
                  <small className="text-secondary me-1">&#126; 15 jam yang lalu</small>
                </div>
                <p>
                  Relawan adalah cahaya di tengah badai banjir. Bersama-sama, kita berusaha untuk menerangi dan menyelamatkan masyarakat yang terkena dampak. 💪🌊 <br />
                  <span className="fw-bold">#RelawanAksi #RelawanSIaga</span>
                </p>
                <img src={Noah_img} alt="" />
                <div className="text-end">
                  <img src={Like} alt="" width="20px" heigth="20px" className="me-3" />
                  <img src={Chat} alt="" width="20px" heigth="20px" className="me-3" />
                  <img src={Share} alt="" width="20px" heigth="20px" className="me-3" />
                </div>
              </div>
            </div>
            <div className="col-12 bg-cream d-flex rounded p-2 gap-3 mb-2">
              <img src={Relawan2} alt="" width="100px" height="100px" />
              <div>
                <div className="d-flex justify-content-between">
                  <p className="mb-1">
                    <span className="fw-bold">Olivia</span> @olivia125
                  </p>
                  <small className="text-secondary me-1">&#126; 3 menit yang lalu</small>
                </div>
                <p>
                  Relawan adalah cahaya di tengah badai banjir. Bersama-sama, kita berusaha untuk menerangi dan menyelamatkan masyarakat yang terkena dampak. 💪🌊 <br />
                  <span className="fw-bold">#RelawanAksi #RelawanSIaga</span>
                </p>
                <div className="text-end">
                  <img src={Like} alt="" width="20px" heigth="20px" className="me-3" />
                  <img src={Chat} alt="" width="20px" heigth="20px" className="me-3" />
                  <img src={Share} alt="" width="20px" heigth="20px" className="me-3" />
                </div>
              </div>
            </div>
            <div className="col-12 bg-cream d-flex rounded p-2 gap-3 mb-2">
              <img src={Relawan3} alt="" width="100px" height="100px" />
              <div>
                <div className="d-flex justify-content-between">
                  <p className="mb-1">
                    <span className="fw-bold">Noah</span> @noarft.11
                  </p>
                  <small className="text-secondary me-1">&#126; 15 jam yang lalu</small>
                </div>
                <p>
                  Relawan adalah cahaya di tengah badai banjir. Bersama-sama, kita berusaha untuk menerangi dan menyelamatkan masyarakat yang terkena dampak. 💪🌊 <br />
                  <span className="fw-bold">#RelawanAksi #RelawanSIaga</span>
                </p>
                <img src={Noah_img} alt="" />
                <div className="text-end">
                  <img src={Like} alt="" width="20px" heigth="20px" className="me-3" />
                  <img src={Chat} alt="" width="20px" heigth="20px" className="me-3" />
                  <img src={Share} alt="" width="20px" heigth="20px" className="me-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Komunitas;
