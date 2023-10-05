import React from 'react';
import Article_img from '../assets/article-img.png';
import Arrow_icon from '../assets/arrow-icon.png';
import Comment_icon from '../assets/comment-icon.png';
import Love_icon from '../assets/Love-icon.png';
import Eye_icon from '../assets/Eye-icon.png';

function Article() {
  return (
    <div className="bg-green">
      <div className="container py-5">
        <div className="row">
          <div className="col text-center">
            <h1 className="fw-bold">Artikel Inspiratif Peran dan Pengalaman Relawan Banjir</h1>
            <p className="fs-5">
              Telusuri cerita-cerita inspiratif dan pemikiran mendalam dari relawan banjir yang telah berjuang keras dalam membantu komunitas terdampak banjir. Temukan wawasan berharga tentang tindakan nyata dan semangat kemanusiaan dalam
              menghadapi bencana alam ini.
            </p>
          </div>

          <div className="col-12">
            <div className="bg-white rounded my-4">
              <div className="d-md-flex">
                <img src={Article_img} alt="" className="rounded-start col-12 col-md-5" />
                <div className="width-100-percent m-2 p-2">
                  <div className="">
                    <div className="mb-5">
                      <h3 className="fs-4 fw-bold">Pengertian dan Persiapan Menghadapi Banjir</h3>
                      <p className="fs-6">Pengertian Banjir dan Cara Mengatasi Banjir di Musim Penghujan</p>
                      <small className="text-secondary">Jakarta, 25 September 2023</small>
                    </div>

                    <a href="#" className="d-flex gap-2 text-decoration-none text-black width-max-content">
                      Baca Selengkapnya
                      <img src={Arrow_icon} alt="" className="width-max-content" />
                    </a>
                  </div>

                  <div className="gap-3 d-flex justify-content-end text-secondary me-3">
                    <small>
                      <img src={Eye_icon} alt="" /> 187
                    </small>
                    <small>
                      <img src={Love_icon} alt="" /> 145
                    </small>
                    <small>
                      <img src={Comment_icon} alt="" /> 400
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded">
              <div className="d-md-flex">
                <img src={Article_img} alt="" className="rounded-start col-12 col-md-5" />
                <div className="width-100-percent m-2 p-2">
                  <div className="">
                    <div className="mb-5">
                      <h3 className="fs-4 fw-bold">Pengertian dan Persiapan Menghadapi Banjir</h3>
                      <p className="fs-6">Pengertian Banjir dan Cara Mengatasi Banjir di Musim Penghujan</p>
                      <small className="text-secondary">Jakarta, 25 September 2023</small>
                    </div>

                    <a href="#" className="d-flex gap-2 text-decoration-none text-black width-max-content">
                      Baca Selengkapnya
                      <img src={Arrow_icon} alt="" className="width-max-content" />
                    </a>
                  </div>

                  <div className="gap-3 d-flex justify-content-end text-secondary me-3">
                    <small>
                      <img src={Eye_icon} alt="" /> 187
                    </small>
                    <small>
                      <img src={Love_icon} alt="" /> 145
                    </small>
                    <small>
                      <img src={Comment_icon} alt="" /> 400
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="me-auto text-end mt-5">
              <a href="#" className="btn btn-white">
                Artikel lainnya &#10140;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
