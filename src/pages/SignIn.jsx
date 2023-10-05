import React from 'react';

function SignIn() {
  return (
    <div className="bg-brown pt-5 d-flex justify-content-center">
      <div className="container mt-2 py-4 px-md-5 mx-md-5 mx-3">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-10 p-3 sign-in d-flex justify-content-center shadow-lg mx-5">
            <div className="col-12 col-md-7">
              <form class="row g-1 my-3">
                <h4 className="text-center fw-bold">Daftar Akun</h4>
                <div class="col-md-12">
                  <label for="name4" class="form-label">
                    Nama
                  </label>
                  <input type="Name" class="form-control" id="inputName4" />
                </div>
                <div class="col-md-12">
                  <label for="username4" class="form-label">
                    Username
                  </label>
                  <input type="Username" class="form-control" id="inputUsername4" />
                </div>
                <div class="col-md-12">
                  <label for="inputEmail4" class="form-label">
                    Email
                  </label>
                  <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-12">
                  <label for="inputPassword4" class="form-label">
                    Kata sandi
                  </label>
                  <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-md-12">
                  <label for="inputPassword4" class="form-label">
                    Konfirmasi ulang kata sandi
                  </label>
                  <input type="password" class="form-control" id="inputPassword4" />
                </div>

                <div class="col-12 text-center mt-3">
                  <a type="submit" class="btn btn-green text-white mx-auto">
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

export default SignIn;
