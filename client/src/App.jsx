import { NavLink, Route, Routes } from 'react-router-dom'
import About from './About.jsx'
import Home from './Home.jsx'
import './App.css'

function App() {
  return (
    <>
      <nav className="site-nav" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
