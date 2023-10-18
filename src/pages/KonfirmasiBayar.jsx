import React from 'react';
import Checked from '../assets/checked.png'

function KonfirmasiBayar() {
  return (
    <div className="bg-green pt-5">
      <div className="container py-5 mt-3">
        <div className="row d-flex justify-content-center my-2">
          <div className="col-7 bg-cream text-center py-3 rounded rounded-4">
            <div >
              <h2 className='fw-bold'>Terima Kasih</h2>
              <h2 className='fw-bold'>Donasi Berhasil Terkirim</h2>
            </div>
            <img src={Checked} alt="" className='mx-auto my-2' width='200px'/>
            <p >Semoga amal kebaikan anda dibalas oleh tuhan tang maha esa</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default KonfirmasiBayar;