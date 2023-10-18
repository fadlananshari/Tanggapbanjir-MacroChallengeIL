import React from 'react';
import Checked from '../assets/checked.png'

function KonfirmasiRelawan() {
  return (
    <div className="bg-green pt-5">
      <div className="container py-5 mt-3">
        <div className="row d-flex justify-content-center my-2">
          <div className="col-7 bg-cream text-center py-3 rounded rounded-4">
            <div >
              <h2 className='fw-bold'>Terima Kasih Sudah Mendaftar.</h2>
              <h2 className='fw-bold'>Formulir Pendaftaran Terkumpul</h2>
            </div>
            <img src={Checked} alt="" className='mx-auto my-2' width='200px'/>
            <p>Pendaftaran akan diproses paling lambat 3 x 24 Jam</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default KonfirmasiRelawan;