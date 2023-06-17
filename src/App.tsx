
import './App.css'


import Header from './components/header/Header.tsx';

import Footer from "./components/footer/Footer.tsx";

import Nav from './components/nav/Nav.tsx';
import About from './components/about/About.tsx';
import Contact from "./components/contact/Contact.tsx";
import Experience from "./components/experience/Experience.tsx";

function App() {

  return (
      <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Contact />
          <Footer />

      </>

  )
}

export default App
