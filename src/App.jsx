import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';

import Credentials from './components/credentials/Credentials';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import "./app.scss";
import { useState } from "react";


import resumeData from './resumeData';



function App() {
  const [menuOpen, setMenuOpen] = useState(false);





  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
    
        <Credentials/>
        <Contact/>





      </div>
    </div>
  );
}

export default App;
