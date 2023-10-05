import React from 'react';
import Panduan_img from '../assets/panduan.png';
import Search from '../assets/search.svg';
import Follow from '../assets/follow.png';
import Logo_panduan from '../assets/logo-panduan.png';

function Panduan() {
  return (
    <div className="bg-cream py-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col d-flex bg-white rounded-2 py-1 align-items-center mx-5">
            <a className="rounded-circle bg-old-brown height-max-content p-1">
              <img src={Search} alt="" className="mx-1" />
            </a>

            <input class="form-control border border-0 mx-2" type="search" placeholder="Cari video edukasi bencana banjir" aria-label="Search" />
            <a href="" className="btn btn-brown fw-bold">
              ENTER
            </a>
          </div>
          <div className="col-12 mt-5">
            <div className="d-flex col-12 align-items-center text-white bg-old-brown rounded my-4">
              <img src={Panduan_img} alt="" className='rounded-start'/>
              <div className="width-100-percent gap-4 p-3">
                <h5 className='fw-bold'>Sosialisasi penaggulangan banjir</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div className='d-flex gap-2'>
                    <img src={Logo_panduan} alt="" width="30px" height="30px" class="rounded-circle"/>
                    <p className="">@arieprabowo</p>
                  </div>
                  <img src={Follow} alt="" width="120px" className='rounded-3'/>

                </div>
                <p>1,76 rb Pengikut &#126; 35 video</p>
                <small className='text-secondary'>Jakarta, 25 September 2023</small>
              </div>
            </div>
            <div className="d-flex col-12 align-items-center text-white bg-old-brown rounded my-4">
              <img src={Panduan_img} alt="" className='rounded-start'/>
              <div className="width-100-percent gap-4 p-3">
                <h5 className='fw-bold'>Sosialisasi penaggulangan banjir</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div className='d-flex gap-2'>
                    <img src={Logo_panduan} alt="" width="30px" height="30px" class="rounded-circle"/>
                    <p className="">@arieprabowo</p>
                  </div>
                  <img src={Follow} alt="" width="120px" className='rounded-3'/>

                </div>
                <p>1,76 rb Pengikut &#126; 35 video</p>
                <small className='text-secondary'>Jakarta, 25 September 2023</small>
              </div>
            </div>
            <div className="d-flex col-12 align-items-center text-white bg-old-brown rounded my-4">
              <img src={Panduan_img} alt="" className='rounded-start'/>
              <div className="width-100-percent gap-4 p-3">
                <h5 className='fw-bold'>Sosialisasi penaggulangan banjir</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div className='d-flex gap-2'>
                    <img src={Logo_panduan} alt="" width="30px" height="30px" class="rounded-circle"/>
                    <p className="">@arieprabowo</p>
                  </div>
                  <img src={Follow} alt="" width="120px" className='rounded-3'/>

                </div>
                <p>1,76 rb Pengikut &#126; 35 video</p>
                <small className='text-secondary'>Jakarta, 25 September 2023</small>
              </div>
            </div>
            <div className="d-flex col-12 align-items-center text-white bg-old-brown rounded my-4">
              <img src={Panduan_img} alt="" className='rounded-start'/>
              <div className="width-100-percent gap-4 p-3">
                <h5 className='fw-bold'>Sosialisasi penaggulangan banjir</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div className='d-flex gap-2'>
                    <img src={Logo_panduan} alt="" width="30px" height="30px" class="rounded-circle"/>
                    <p className="">@arieprabowo</p>
                  </div>
                  <img src={Follow} alt="" width="120px" className='rounded-3'/>

                </div>
                <p>1,76 rb Pengikut &#126; 35 video</p>
                <small className='text-secondary'>Jakarta, 25 September 2023</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panduan;
