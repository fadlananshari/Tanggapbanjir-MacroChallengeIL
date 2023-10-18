import React from 'react';

function LaporBanjir() {
  return (
    <div className="bg-brown pt-5 d-flex justify-content-center">
      <div className="container mt-2 py-4 px-md-5 mx-md-5 mx-3">
        <div className="row d-flex justify-content-center">
          <div className="mb-4">
            <h2 className="fw-bold">Formulir Laporan Kejadian Banjir</h2>
            <p>Relawan siap siaga membantu dimanapun dan kapanpun</p>
          </div>

          <div className="col-12 p-3 sign-in d-flex justify-content-center bg-green shadow-lg mx-5">
            <div className="col-12">
              <form class="row g-1 my-3">
                <p className="fw-bold">Mohon isi formulir dengan benar sesuai dengan kondisi di tempat kejadian saat ini!</p>
                <div class="col-md-12">
                  <label for="nik" class="form-label">
                    Nik Pelapor*
                  </label>
                  <input type="Name" class="form-control" id="nik" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Nama Pelapor*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Alamat Pelapor*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Tempat Kejadian Banjir*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Waktu terjadi Banjir* (19:30 WIB/WIT/WITA)
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Jumlah Korban*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Luka Ringan*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Luka Sedang*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Luka Berat*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Jumlah Properti Rusak*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label class="form-label">
                    Bantuan yang dibutuhkan*
                  </label>
                  <textarea class="form-control"></textarea>
                </div>
                <div class="col-12 text-end mt-3">
                  <a href='/lapor-banjir/konfirmasi' type="submit" class="btn btn-brown px-5 text-white mx-auto">
                    Laporkan
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaporBanjir;
