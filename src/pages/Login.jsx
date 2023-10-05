import React from 'react';
import Login_img from '../assets/login-img.png';

function Login() {
  return (
    <div class="d-flex align-items-center px-5 mt-20px bg-brown">
      <div class="container container-login justify-content-between col-12 col-md-11 col-lg-9 shadow-lg my-4">
        <div class="row justify-content-between d-md-flex">
          <div class="col-12 pt-2 pt-md-5 col-md-5">
            <form class="">
              <h3 class="fs-5 fw-bold text-center">Selamat Datang, Relawan Banjir!</h3>
              <p class="fs-6 mb-5 text-center">Akses ke akun relawan banjir Anda. Lanjutkan tugas Anda sebagai relawan!</p>
              <div class="mb-3 ">
                <label for="exampleInputEmail1" class="form-label fw-lighter fs-14">
                  Email/Username
                </label>
                <input type="email" class="form-control shadow-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-1">
                <label for="exampleInputPassword1" class="form-label fw-lighter fs-14">
                  Kata sandi
                </label>
                <input type="password" class="form-control shadow-sm" id="exampleInputPassword1" />
              </div>
              <div className="forget-pass text-end">
                <a href="#" class="font-green fs-11 text-decoration-none">
                  Lupa Kata Sandi?
                </a>
              </div>
              <div className="row justify-content-center">
                <button type="submit" class=" width-max-content btn-green px-4 text-white py-1" href="#">
                  Masuk
                </button>
              </div>
              <p class="mx-auto width-max-content fs-11 mt-2 font-green">
                Belum punya akun?{" "}
                <a href="#" class="fw-bold text-decoration-none font-green">
                  Buat akun
                </a>
              </p>
            </form>
            <div class="mt-5">
              <a href="#" class="text-decoration-none font-green fs-11">
                www.namawibesite.com
              </a>
            </div>
          </div>
          <div class="d-none d-md-block col-6 my-3 me-3 rounded-end-4 green pt-4">
            <div className="container container-login green row justify-content-center">
              <div className="row justify-content-center">
                <h2 class="width-max-content align-content-center text-white">NAMA WEBSITE</h2>
                <p class="width-max-content text-white text-center">“Membantu mengatasi bencana banjir dengan mudah, cepat dan tanggap!”</p>
              </div>
              <img src={Login_img} alt="" class="login-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
