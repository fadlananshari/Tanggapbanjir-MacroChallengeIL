import React from 'react';

function DaftarIndividu() {
  return (
    <div className="bg-brown pt-5 d-flex justify-content-center">
      <div className="container mt-2 py-4 px-md-5 mx-md-5 mx-3">
        <div className="row d-flex justify-content-center">
          <div className="mb-4">
            <h2 className="fw-bold">Formulir Pendaftaran Menjadi Relawan Banjir</h2>
            <p>Jadilah relawan yang bertanggung jawab melaksanakan tugas sepenuh hati.</p>
          </div>

          <div className="col-12 p-3 sign-in d-flex justify-content-center bg-green shadow-lg mx-5">
            <div className="col-12">
              <form class="row g-1 my-3">
                <p className="fw-bold">*Pastikan Anda telah memenuhi syarat dan ketentuan yang ditetapkan.</p>
                <div class="col-md-12">
                  <label for="nik" class="form-label">
                    Nik*
                  </label>
                  <input type="Name" class="form-control" id="nik" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Nama Lengkap*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div className="col-12">
                  <label htmlFor="" className=" mb-3">
                    Jenis Kelamin*:
                  </label>
                  <div className="d-flex gap-3">
                    <div class="form-check">
                      <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
                      <label class="form-check-label" for="validationFormCheck2">
                        Laki-laki
                      </label>
                    </div>
                    <div class="form-check mb-3">
                      <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
                      <label class="form-check-label" for="validationFormCheck3">
                        Perempuan
                      </label>
                      <div class="invalid-feedback">More example invalid feedback text</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Tanggal Lahir*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Usia*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Profesi*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Institusi*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Alamat*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Kota*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Provinsi*
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label class="form-label">
                    Motivasi*
                  </label>
                  <textarea class="form-control"></textarea>
                </div>
                <div class="col-12 text-end mt-3">
                  <a type="submit" class="btn btn-brown px-5 text-white mx-auto">
                    Daftar
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

export default DaftarIndividu;
