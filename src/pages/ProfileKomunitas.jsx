import React from 'react';
import Love from '../assets/love-icon.png';
import Komunitas_img from '../assets/komunitas-img.png';
import Map from '../assets/location.png';
import User from '../assets/user.png';
import Calender from '../assets/calendar.png';
import Social from '../assets/social.png';
import Telephone from '../assets/telephone-call.png';
import Aktivitas1 from '../assets/aktivitas1.png';
import Aktivitas2 from '../assets/aktivitas2.png';
import Aktivitas3 from '../assets/aktivitas3.png';
import Aktivitas4 from '../assets/aktivitas4.png';
import Aktivitas5 from '../assets/aktivitas5.png';


function ProfileKomunitas() {
  return (
    <div className="bg-cream">
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between">
              <div>
                <h2 className="fw-bold">Profile Komunitas</h2>
                <p>Komunitas yang siap sedia ditengah hujan badai melanda.</p>
              </div>
              <div className="text-center">
                <img src={Love} alt="" />
                <p className="text-secondary">Like</p>
              </div>
            </div>
            <div className="">
              <div>
                <div className="d-flex gap-3">
                  <img src={Komunitas_img} alt="" width="300px" class="rounded" />
                  <div className="my-auto">
                    <h2 className="fw-bold">Yayasan Rumah Solusi Beta Indonesia</h2>
                    <div className="d-flex gap-2">
                      <img src={Map} alt="" className="height-max-content" />
                      <p className="text-secondary m-0">Kabupaten Kupang, Nusa Tenggara Timur</p>
                    </div>
                    <div className="d-flex gap-2">
                      <img src={User} alt="" className="height-max-content" />
                      <p className="text-secondary">431 Anggota</p>
                    </div>
                    <p>Organisasi sosial yang bergerak di bidang pengembangan pemimpin muda, ekologi dan pendidikan dengan konsep alam.</p>
                  </div>
                </div>
                <div className="mt-3">
                  <h5 className="fw-bold">Keterangan:</h5>
                  <div className="d-flex gap-2">
                    <img src={Calender} alt="" className="height-max-content" />
                    <p className="m-0">23 September 2016</p>
                  </div>
                  <div className="d-flex gap-2">
                    <img src={Social} alt="" className="height-max-content" />
                    <p className="m-0">sekolahalam.manusak@gmail.com</p>
                  </div>
                  <div className="d-flex gap-2">
                    <img src={Telephone} alt="" className="height-max-content" />
                    <p className="m-0">081339718464</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="fw-bold mb-3">Aktivitas Kita</h4>
              <div className="d-flex justify-content-center gap-3">
                <img src={Aktivitas1} alt="" />
                <img src={Aktivitas2} alt="" />
                <img src={Aktivitas3} alt="" />
                <img src={Aktivitas4} alt="" />
                <img src={Aktivitas5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileKomunitas;
