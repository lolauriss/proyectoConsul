import React from 'react';
import './App.css';
import Navbar from './components/header'
import Jumbotron from './components/main'
import Cards from './components/cards'
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

    <div className="container">
        <Jumbotron />
        <Cards />

    </div>

    <footer >
    <Footer />
    </footer>

    </div>
  );
}

export default App;
