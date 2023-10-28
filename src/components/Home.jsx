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
                            I've developed a deep passion for programming, and I've gained proficiency in several classic programming languages such as <i className="purple"> C,C++,Java,Javascript</i> 
                                <br />
                                <br />
                                My areas of interest primarily <i className="purple"> revolve around pioneering new web technologies and products. I'm also drawn to fields related to cloud computing and Android app development.</i>
                                

                                <br />
                                <br />
                                Whenever the opportunity arises, I enthusiastically channel my passion for product development, leveraging tools like <i className="purple">Node.js</i>, as well as <i className="purple">modern JavaScript libraries and frameworks</i>such as <i className="purple"> React.js</i>.
                            
                            </p>
                        </div>
                    </div>
                    <div className="roww">
                    <div className="home-about-social">
                            <h2 style={{ paddingTop:'25px', display:"flex",  justifyContent:'center'}}>FIND ME ON</h2>
                    <p style={{display:"flex",  justifyContent:'center'}}>
                    Feel <span className="purple"> free </span> to connect with me</p>
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