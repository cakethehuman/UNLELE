import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <Navbar />

      <main className="page-container">
        <section className="page-hero">
          <h1>Tentang Universitas Lele</h1>
          <p>
            Mengenal lebih dekat Universitas Lele sebagai institusi pendidikan tinggi yang berfokus pada kualitas akademik, teknologi, dan pengembangan karakter mahasiswa.
          </p>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Profil Kampus</h2>
            <p>
              Universitas Lele adalah universitas yang memiliki komitmen untuk menciptakan lingkungan pendidikan yang modern, inklusif, dan berorientasi pada masa depan. Kampus ini dirancang untuk membantu mahasiswa mengembangkan kemampuan akademik, keterampilan praktis, serta karakter yang dibutuhkan dalam dunia kerja.
            </p>

            <p>
              Melalui pendekatan pembelajaran yang menggabungkan teori, praktik, penelitian, dan pengembangan soft skill, Universitas Lele berusaha membentuk lulusan yang tidak hanya memahami ilmu pengetahuan, tetapi juga mampu menerapkannya dalam kehidupan nyata.
            </p>
          </div>
        </section>

        <section className="vision-mission-section">
          <div className="info-card">
            <h2>Visi</h2>
            <p>
              Menjadi universitas unggulan yang menghasilkan lulusan kompeten, kreatif, berintegritas, dan mampu bersaing di tingkat nasional maupun global.
            </p>
          </div>

          <div className="info-card">
            <h2>Misi</h2>
            <ul>
              <li>Menyelenggarakan pendidikan tinggi yang berkualitas.</li>
              <li>Mendorong penelitian dan inovasi berbasis teknologi.</li>
              <li>Mengembangkan karakter mahasiswa yang profesional dan etis.</li>
              <li>Membangun kerja sama dengan dunia industri dan masyarakat.</li>
            </ul>
          </div>
        </section>

        <section className="values-section">
          <h2>Nilai-Nilai Kampus</h2>

          <div className="card-container">
            <div className="card">
              <h3>Integritas</h3>
              <p>
                Menjunjung tinggi kejujuran, tanggung jawab, dan etika dalam setiap kegiatan akademik maupun non-akademik.
              </p>
            </div>

            <div className="card">
              <h3>Inovasi</h3>
              <p>
                Mendorong mahasiswa untuk berpikir kreatif, adaptif, dan mampu menciptakan solusi terhadap berbagai tantangan.
              </p>
            </div>

            <div className="card">
              <h3>Kolaborasi</h3>
              <p>
                Membangun budaya kerja sama antara mahasiswa, dosen, industri, dan masyarakat.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default About