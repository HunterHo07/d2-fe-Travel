import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './styles/global.css'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Page Components
import Home from './components/home/Home'
import About from './components/about/About'
import CruiseInfo from './components/cruise/CruiseInfo'
import News from './components/news/News'
import TeamWorld from './components/team/TeamWorld'
import Packages from './components/packages/Packages'
import Contact from './components/contact/Contact'

function App() {
  return (
    <Router>
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cruise-info" element={<CruiseInfo />} />
          <Route path="/news" element={<News />} />
          <Route path="/team-world" element={<TeamWorld />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  )
}

export default App
