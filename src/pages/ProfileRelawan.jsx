import Relawan_img from '../assets/relawan-img.png';
import FB from '../assets/sosmed/facebook.png';
import Google from '../assets/sosmed/gmail.png';
import IG from '../assets/sosmed/instagram.png';

function ProfileRelawan() {
  return (
    <div className="bg-cream">
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold">Profile Relawan</h2>
            <p>Kami Relawan, Kami Peduli, Kami Beraksi</p>
          </div>
          <div className="col-6 text-center mx-auto">
            <img src={Relawan_img} alt="" width="200px" />
            <div className="mt-2">
              <h3 className="fw-bold border-bottom border-black width-max-content mx-auto">Ridwan Pratama</h3>
              <h4>Mahasiswa</h4>
              <h4>22 Tahun</h4>
              <p className="my-4">“Ketika banjir menghancurkan, kita hadir untuk membangun. Bersama-sama, kita bisa mengubah bencana menjadi kesempatan untuk menunjukkan kebaikan dan kasih sayang kita kepada sesama." </p>
            </div>
          </div>
          <div className="col-12">
            <div className="my-3">
              <h4 className="fw-bold">Motivasi</h4>
              <div className="bg-old-brown text-white py-4 px-4 rounded">
                <p>
                  Kepedulian saya terhadap keselamatan dan kesejahteraan sesama manusia menjadi motivasi utama saya untuk menjadi relawan banjir. Saya percaya bahwa kita semua memiliki tanggung jawab untuk membantu mereka yang membutuhkan
                  dalam situasi darurat.
                </p>
              </div>
            </div>
            <div className="my-3">
              <h4 className="fw-bold">Tujuan</h4>
              <div className="bg-old-brown text-white py-4 px-4 rounded">
                <p>
                  Tujuan saya sebagai relawan banjir adalah memberikan bantuan yang diperlukan kepada mereka yang terdampak, membantu dalam upaya penyelamatan, dan mendukung pemulihan komunitas. Saya juga berkomitmen untuk terus belajar dan
                  berkembang sebagai relawan agar dapat memberikan kontribusi yang lebih besar lagi di masa depan.
                </p>
              </div>
            </div>
            <div className="my-3">
              <h4 className="fw-bold">Pengalaman</h4>
              <div className="bg-old-brown text-white py-4 px-4 rounded">
                <p>
                  Saya telah aktif sebagai relawan dalam penanganan banjir selama [jumlah tahun] tahun. Selama periode ini, saya telah terlibat dalam berbagai proyek dan kegiatan yang bertujuan untuk membantu komunitas yang terkena dampak
                  banjir.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold">Kontak:</h5>
              <div className="d-flex gap-1 align-items-center">
                <img src={FB} alt="" />
                <p className="m-0 fw-bold">RidwanPratama22</p>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <img src={IG} alt="" />
                <p className="m-0 fw-bold">ridwanPratama22</p>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <img src={Google} alt="" />
                <p className="m-0 fw-bold">ridwanPratama22@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileRelawan;
