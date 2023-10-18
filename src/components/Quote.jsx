import React from 'react';
import Navigate from '../assets/navigate.png';
import Quote_img from '../assets/quote-img.png';

function Quote() {
  return (
    <div className="bg-green">
      <div className="container pb-5">
        <div className="row d-flex pt-5">
          <div className="col-md-7">
            <h2 className="mb-4">
              Kita adalah <span className="fw-bolder">mata dan telinga bagi komunitas kita.</span> Jika Anda melihat bahaya banjir atau situasi darurat lainnya, laporkan segera dan bantu mencegah kerugian yang lebih besar.
            </h2>
            <div className="d-flex">
              <a href="/lapor-banjir" className="btn btn-white btn-lg fw-bold">
                Laporkan Banjir
              </a>
              <img src={Navigate} alt="" height="50px" />
            </div>
          </div>

          <img src={Quote_img} alt="" width="50px" className="col-5 d-none d-md-block p-0 mt-auto" />
        </div>
      </div>
    </div>
  );
}

export default Quote;
