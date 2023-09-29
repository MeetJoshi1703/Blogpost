import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import PostInd from './components/PostInd';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Compose from './pages/Compose';
import React from 'react'

const App = () => {
  return (
    <div>
       <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/post/:postTitle' element={<PostInd />} />
          <Route path='*' element={<Home />} />
          <Route path="/compose" element={<Compose />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}



export default App;
