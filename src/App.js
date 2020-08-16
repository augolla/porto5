import React,{useContext} from 'react';
import Navbar, { ThemeContext} from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

import './App.css';

function App() {
  const cts=useContext(ThemeContext)
  return (
      <div className="App" style={{background:cts.darkBlue}}>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>

  );
}

export default App;
