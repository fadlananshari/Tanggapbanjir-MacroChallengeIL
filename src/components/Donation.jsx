import React from 'react';
import Bca from '../assets/donasi/bca.png';
import Bni from '../assets/donasi/bni.png';
import Bri from '../assets/donasi/bri.png';
import Mandiri from '../assets/donasi/mandiri.png';
import Gopay from '../assets/donasi/gopay.png';
import Dana from '../assets/donasi/dana.png';
import Shopeepay from '../assets/donasi/shopeepay.png';
import Donasi from '../assets/donasi/donasi.png';

function Donation() {
  return (
    <div className="bg-cream" id='donasi'>
      <div className="container pb-5">
        <div className="row">
          <div className="text-center py-5">
            <h1 className="title fw-bold mx-auto">Ayo Bersama-sama Menjadi Pahlawan!</h1>
            <p className="title mx-auto">Donasikan sebagian kecil dari apa yang Anda miliki untuk membantu mereka yang kurang beruntung. Bersama, kita bisa memberikan harapan.</p>
          </div>
          <div className="col-12 col-md-8 gap-3">
            <p className="">Satu klik bisa mengubah hidup seseorang. Salurkan bantuan Anda melalui transfer bank atau saldo digital hari ini melalui:</p>
            <div className="d-flex row row-cols-4 justify-content-center mb-5">
              <img src={Bca} alt="" className="col" />
              <img src={Bni} alt="" className="col" />
              <img src={Bri} alt="" className="col" />
              <img src={Mandiri} alt="" className="col" />
              <img src={Gopay} alt="" className="col mt-4" />
              <img src={Shopeepay} alt="" className="col mt-4" />
              <img src={Dana} alt="" className="col mt-4" />
            </div>
            <div>
              <h1 className="fs-3 fw-bolder color-brown">TOTAL DONASI TERKUMPUL:</h1>
              <h1 className="fs-3 fw-bolder color-green">Rp 13.657.893</h1>
            </div>
          </div>

          <img src={Donasi} alt="" width="300px" className="col-4 d-none d-md-flex" />
        </div>
      </div>
    </div>
  );
}

export default Donation;
