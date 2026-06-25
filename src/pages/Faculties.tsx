import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Faculties() {
  return (
    <>
      <Navbar />

      <main className="page-container">
        <section className="page-hero">
          <h1>Fakultas di Universitas Lele</h1>
          <p>
            Universitas Lele menyediakan fakultas yang dirancang untuk menjawab kebutuhan mengenai kelelean.
          </p>
        </section>

        <section className="faculties-section">
          <div className="faculty-card">
            <h2>Fakultas Perikanan</h2>
            <p>
              Fakultas Perikanan berfokus pada pengembangan kemampuan mahasiswa dalam bidang ternak lele, manajemen air, distribusi hasil ternak, teknologi kelautan, dan sumber daya perairan.
            </p>

            <h3>Program Studi</h3>
            <ul>
              <li>Teknologi dan Manajemen Perlelean Budidaya</li>
              <li>Manajemen Sumberdaya Perairan</li>
              <li>Teknologi Perairan</li>
              <li>Ilmu Teknologi Kelelean</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Faculties