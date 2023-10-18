import React from 'react';
import Checked from '../assets/checked.png'

function KonfirmasiLaporBanjir() {
  return (
    <div className="bg-green pt-5">
      <div className="container py-5 mt-3">
        <div className="row d-flex justify-content-center my-2">
          <div className="col-7 bg-cream text-center pt-3 pb-5 rounded rounded-4">
            <div >
              <h2 className='fw-bold'>Laporan Berhasil Dibuat!</h2>
              <h2 className='fw-bold'>Kami akan segera membantu.</h2>
            </div>
            <img src={Checked} alt="" className='mx-auto my-2' width='200px'/>
          </div>
        </div>
      </div>
    </div>
  );
}


export default KonfirmasiLaporBanjir;