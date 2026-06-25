import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Faculties from './pages/Faculties'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faculties" element={<Faculties />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App