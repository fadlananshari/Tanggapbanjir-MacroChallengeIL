import React, { Component, useState } from 'react';
import BCA from '../assets/bca.png';
import Bank from '../assets/bank.png';
import { createContext, useContext } from 'react';

class Donasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    return (
      <div className="bg-green pt-5">
        <div className="container py-5">
          <div className="row">
            <div className="width-max-content">
              <h3 className="fw-bold">Isi Nominal Donasi</h3>
              <div className="d-flex bg-white justify-content-center py-1 px-3 rounded text-secondary gap-1 align-items-center">
                <h4 className="fw-bold">Rp.</h4>
                <input type="number" min="10000" name="" id="" inputMode="none" className=" border-0 fw-bold fs-4 text-secondary" value={this.state.inputValue} onChange={this.handleInputChange} />
              </div>
              <p className="text-white">Minimal donasi Rp. 10.000</p>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <p className="m-0">Pembayaran dilakukan melalui:</p>
                <div className="d-flex justify-content-between bg-white rounded px-3 align-items-center">
                  <div className="d-flex gap-2 align-items-center">
                    <img src={Bank} alt="" width="50px" height="50px" />
                    <h4 className="fw-bold">Transfer Bank</h4>
                  </div>
                  <img src={BCA} alt="" height="80px" />
                </div>
              </div>
              <div className="col-12 mb-3">
                <p className="m-0">Nama (Opsional)</p>
                <div className="bg-white rounded p-2">
                  <input type="text" className="border-0 width-100-percent" />
                </div>
              </div>
              <div className="col-12 mb-5">
                <p className="m-0">Pesan atau Dukungan</p>
                <div className="bg-white rounded p-2">
                  <input type="text" className="border-0 width-100-percent" />
                </div>
              </div>
              <div className="bg-white rounded p-2">
                <h5 className="fw-bold">Total Donasi</h5>
                <div className="d-flex justify-content-between">
                  <h3 className="fw-bold">Rp. {this.state.inputValue || '0'}</h3>
                  <a href="/donasi/bayar" className="btn btn-lg btn-green text-white px-4">
                    Lanjut
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Donasi;
