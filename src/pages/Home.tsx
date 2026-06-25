import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />

      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Selamat Datang di Universitas Lele</h1>
          <p>
            Universitas modern yang memiliki fokus pada bidang Perlelean.
          </p>
        </div>
      </section>

      <section id="about" className="section">
        <h2>Tentang UNLELE</h2>
        <p>
          Universitas Lele adalah institusi pendidikan tinggi yang berkomitmen
          untuk menghasilkan lulusan yang kompeten, kreatif, dan siap bersaing
          di ternak lele.
        </p>
      </section>
      <Footer />
    </>
  )
}

export default Home