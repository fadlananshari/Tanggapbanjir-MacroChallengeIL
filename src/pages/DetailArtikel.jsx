import Article_img from '../assets/article-img.png'

function DetailArtikel() {
  return (
    <div className="bg-cream py-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="text-center mb-3">
              <h2 className='mb-0'>Pengertian dan Persiapan Menghadapi Banjir</h2>
              <small class="text-secondary">Jakarta, 25 September 2023</small>
            </div>
            <div className="text-center d-block mb-4">
              <img src={Article_img} alt="" width="60%"/> <br />
              <small class="text-secondary">gambar.com</small>
            </div>
            <p>
            Pengertian dan persiapan menghadapi banjir (banjir):<br/>
            Banjir, yang dikenal secara lokal sebagai banjir besar, adalah bencana alam yang dapat
            memberikan dampak negatif terhadap masyarakat, infrastruktur, dan lingkungan. Hal ini
            terjadi ketika air dalam jumlah berlebihan membanjiri suatu daerah, biasanya akibat
            hujan lebat, meluapnya sungai, atau gelombang badai. Dalam artikel ini, kita akan
            mengeksplorasi tanda-tanda akan datangnya banjir dan mendiskusikan strategi untuk
            memprediksi dan meminimalkan dampak buruk dari bencana ini. <br /><br />

            Tanda-tanda akan datangnya banjir: <br />
            <span className="fw-bold">Peringatan cuaca:</span> <br />
            Perhatikan prakiraan cuaca dan peringatan dari badan cuaca setempat. Curah hujan yang tinggi, terutama saat musim hujan, dapat dengan cepat menimbulkan banjir. Hujan terus-menerus selama beberapa hari merupakan tanda jelas adanya risiko banjir. <br /><br />
            <span className="fw-bold">Ketinggian air yang tinggi:</span> <br />
            Pantau ketinggian air di sungai, aliran sungai, dan danau terdekat. Kenaikan permukaan air secara tiba-tiba bisa menjadi tanda awal terjadinya banjir. Beberapa daerah memiliki alat pengukur banjir yang menyediakan data real-time. <br /><br />
            <span className="fw-bold">Saturasi tanah:</span> <br />
            Jika tanah menjadi jenuh air, maka tanah tidak dapat menyerap curah hujan lagi, sehingga meningkatkan risiko banjir bandang. Carilah tanda-tanda erosi tanah, tanah longsor, atau genangan air di daerah dataran rendah. <br /><br />
            <span className="fw-bold">Saluran air dan pipa tersumbat:</span> <br />
            Amati sistem drainase di daerah Anda. Pipa dan selokan yang tersumbat dapat memperparah banjir saat hujan deras. Segera laporkan kemacetan kepada pihak berwenang setempat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailArtikel;