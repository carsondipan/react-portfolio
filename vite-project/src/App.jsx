import React from 'react';
import './App.css';
import Info from './components/Info';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/Contact';

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Footer />
    </div>
  )
}

export default App
