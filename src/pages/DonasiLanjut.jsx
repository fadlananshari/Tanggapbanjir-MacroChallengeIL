import React, { Component } from 'react';
import Clock from '../assets/clock.png';

import QR from '../assets/qr-code.png';

class DonasiLanjut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 36000, // 10 jam dalam detik
    };
  }

  componentDidMount() {
    this.timerInterval = setInterval(this.tick, 1000); // Memulai timer saat komponen dipasang
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval); // Membersihkan timer saat komponen dilepas
  }

  tick = () => {
    this.setState((prevState) => ({
      seconds: prevState.seconds - 1,
    }));
  };

  render() {
    const { seconds } = this.state;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let hourCheck = function (hours) {
      if (hours < 10) {
        return 0;
      }
    };
    let minuteCheck = function (minutes) {
      if (minutes < 10) {
        return 0;
      }
    };
    let secondCheck = function (remainingSeconds) {
      if (remainingSeconds < 10) {
        return 0;
      }
    };
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('id-ID', options); // Atur lokasi (ID untuk Indonesia)

    return (
      <div className=" pt-5">
        <div className="bg-cream">
          <div className="container py-4">
            <h2 className="fw-bold">Batas Waktu Pembayaran</h2>
            <div className="d-flex justify-content-between align-items-center">
              <p className="m-0">{formattedDate}</p>
              <div className="d-flex align-items-center gap-2">
                <img src={Clock} alt="" width="20px" height="20px" />
                <p className="m-0">
                  {hourCheck(hours)}{hours} : {minuteCheck(minutes)}{minutes} : {secondCheck(remainingSeconds)}{remainingSeconds}
                </p>
                {seconds === 0 && <p>Waktu Habis!</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green">
          <div className="container pb-5">
            <div className="">
              <div className="pt-2 mb-4">
                <h4 className="fw-bold mx-auto width-max-content">Scan QR Code</h4>
                <div className="p-3 rounded bg-white width-max-content mx-auto">
                  <img src={QR} alt="" width="300px" />
                </div>
              </div>
              <div className="bg-cream rounded p-2">
                <h5 className="fw-bold">Total Donasi</h5>
                <div className="d-flex justify-content-between">
                  <h3 className="fw-bold">Rp. 100000</h3>
                  <a href="/donasi/bayar/konfirmasi" className="btn btn-green fw-bold text-white height-max-content">
                    Cek Status
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

export default DonasiLanjut;
