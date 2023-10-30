import "./Home.css"
import image from '../assets/me_profie.jpeg'
import { Tilt } from "@jdion/tilt-react"
import { FaGithubAlt } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import { FiLinkedin } from "react-icons/fi"
import {AiOutlineInstagram} from 'react-icons/ai'
import { useState } from "react";
import TypeWriter from "typewriter-effect"
import ParticlesBG from "./ParticlesBg";
const Home = () => {
    const [state] = useState({
        title: "Hi",
        titleTwo: "There! 👋🏻",
        titleThree: "I'm",
        titleFour:" Yuvraj"
    })
    return (
        <div id="home"> 
            <div className="container">
                <div className="home-content container">
                    <div className="row">
                        <div className="home-header col-md-7" >
                            <h2>
                                <div className="title">{state.title}</div>
                                <div className="titleTwo">{state.titleTwo }</div>
                                <span className="titleThree">{state.titleThree }</span>
                                <span className="titleFour" style={{ color: '#fc0fc0' }}>{state.titleFour }</span>                                 
                            </h2>
                            <div className="text ">
                                <TypeWriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 20,
                                        strings: [
                                            "Coding Enthusiast",
                                            "Developer",
                                            "Tech Enthusiast"
                                        ]
                                }}
                                />
                             
                            </div>
                        </div>
                        <div className="col-md-5"  style={{ paddingBottom: '20px' }}> 
                            <div className="inner">
                             
                                <Tilt>
                                <img src={image} alt="home pic"
                              className="img-fluid" id="myimg"  style={{ 
  maxHeight: '350px',
  borderRadius: '50%' 
}}
                                /> 
                                </Tilt>
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="home-about-section container-fluid">
                <div className="container">
                    <div className="roww">
                        <div className="home-about-description col-md-8">
                            <h1 className="home-about-title">
                                Let me
                                <span className="purple"> Introduce </span>
                                Myself
                            </h1>

                            <p className="home-about-body">
                               <span> I've</span><span> developed</span> <span>a</span> <span>deep</span> <span>passion</span> <span>for</span> <span>programming,</span> <span>and </span><span>I've</span> <span>gained </span><span>proficiency </span> <span>in</span> <span>several </span><span>classic</span> <span>programming </span> <span>languages</span> <span> such as</span> <span> C</span>,<span>C++</span>,<span>Java</span>,<span>Javascript</span>.
                                    

                                    <br />
                                <br />
                                <span>My</span> <span>areas</span> <span>of</span> <span>interest</span> <span>primarily</span> <span>revolve</span> <span>around</span> <span>pioneering</span> <span>new</span> <span>web</span> <span>technologies</span> <span>and</span> <span>products.</span> <span>I'm</span> <span>also</span> <span>drawn</span> <span>to</span> <span>fields</span> <span>related</span> <span>to</span> <span>cloud</span> <span>computing</span> <span>and</span> <span>Android</span> <span>app</span> <span>development.</span>

                                

                                <br />
                                <br />
                                <span>Whenever</span> <span>the</span> <span>opportunity</span> <span>arises,</span> <span>I</span> <span>enthusiastically</span> <span>channel</span> <span>my</span> <span>passion</span> <span>for</span> <span>product</span> <span>development,</span> <span>leveraging</span> <span>tools</span> <span>like</span> <span>Node.js,</span> <span>as</span> <span>well</span> <span>as</span> <span>modern</span> <span>JavaScript</span> <span>libraries</span> <span>and</span> <span>frameworks</span> <span>such</span> <span>as</span> <span>React.js.</span>

                            </p>
                        </div>
                    </div>
                    <div className="roww">
                    <div className="home-about-social">
                            <h2 style={{ paddingTop:'25px', display:"flex",  justifyContent:'center'}}>FIND ME ON</h2>
                    <p style={{display:"flex",  justifyContent:'center'}}>
                    Feel <span className="purple " style={{marginLeft:'0.3em',marginRight:'0.3em'}}>free</span> to connect with me</p>
                    <div className="logos">
                 <a href="https://github.com/yuvrajsingh176">     <FaGithubAlt />
                 </a>                  <a href="https://twitter.com/Yuvrajsingh176"><RiTwitterXFill/></a> 
                <a href="https://www.linkedin.com/in/yuvraj-singh-a46164206/"> <FiLinkedin/></a>   
                 <a href="https://www.instagram.com/?hl=en"> <AiOutlineInstagram/></a>  
                        
                    </div>
                            <div className="buttons">
                            <button>Visit all links</button>
                            </div>

                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;