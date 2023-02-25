import React from 'react';
import './App.css';
import Info from './components/Info';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Info />
      <About />
      <Footer />
    </div>
  )
}

export default App
