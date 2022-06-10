import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Project from './Pages/Project'
import ProjectDisplay from './Pages/ProjectDisplay'
import Experience from './Pages/Experience'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projects/:id" element= {<ProjectDisplay /> } />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
