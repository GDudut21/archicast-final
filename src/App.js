import React from 'react';
import Nav from './components/Navbar';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/ContactUs';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="contact"><Contact /></section>
        <section id="projects"><Projects /></section>
      </main>
    </>
  );
}

export default App;