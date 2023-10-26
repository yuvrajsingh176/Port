import "./App.css";
import { useEffect } from "react";
import Navbar from './components/Navbar'
import Home from "./components/Home";
import ParticlesBG from "./components/ParticlesBg";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
  if (document.getElementById("vanta")) {
    VANTA.CLOUDS({
      el: "#vanta",
      mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  skyColor: 0x30505,
  cloudShadowColor: 0xc12,
  sunColor: 0x906b3f,
  sunlightColor: 0x794d30
     
    });
  }
}, []);


  return (
      <div className="app">
<ParticlesBG/>    
        
        <Navbar/>
        <Home />
        <About/>
      <Project />
      <Footer/>
    </div>

      );
}

export default App;
