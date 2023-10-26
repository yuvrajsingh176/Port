import './Projects.css';
import f from "../assets/j-f.png";
import i from "../assets/i.png"
import ec from "../assets/ec.png"
import node from "../assets/node.svg"
import Html from "../assets/css.svg"
import css from "../assets/css-3-svgrepo-com.f1823d8606e24164d5ac03b4e9b80d85.svg"
import react from "../assets/react.svg"
import mong from "../assets/MongoDB_Logomark_ForestGreen.png"
import { FaGithubAlt } from 'react-icons/fa'
import { CgMediaLive } from "react-icons/cg"
import js from "../assets/icons8-javascript.svg"
import fb from "../assets/fb.svg"
const Project =() => {
    const titles = ["Jobify", "Mapty","ecommerce"];
    const desc = ["MERN application, companies could list job openings, monitor job statuses, make edits to job postings, and track application statuses, which could have helped the Job seekers in this Competitive market.",
        "Utilizing a geolocation API, I retrieved the realtime location of the user and monitored their active cycling and running sessions. This allowed for the organization of cycling activities based on dates, enabling the addition of details such as distance covered, duration, and cadence.",
    "Ecommerce Website"
    ]
    return (
        <div className='main-div' id="projects">
        <div style={{display:"grid", justifyContent:"center",paddingTop:"1rem"}}>
            <p style={{fontSize:"2rem"}}>My Recent <span className='purple'> Works</span></p>
            <p style={{fontSize:"1rem",marginBottom:"2px"}} >Here are few projects I have worked upon</p>
        </div>
        <div style={{display:"flex"}}>
      
        <div className='cards' >
        <div className="card">
            <div style={{margin:"1rem"}}>
            <div style={{display:"flex",justifyContent:"center",margin:'10px'}}>
            <img src={f} alt="" style={{width:"80%",height:"6rem"}}/>

            </div>
            <div >
                <h2 style={{fontSize:"2em",justifyContent:"center",display:"flex"}}>{titles[0]}</h2>
                    <h2 style={{ fontSize: "1em", justifyContent: "center", display: "flex" }}>{desc[0]}</h2>
            </div>
            <div className="tech-stack">
                <p style={{display:'flex',justifyContent:"center"}}>Tech Stack</p>
                <div className="boxx">
                    <button type="button" className="btn btn-primary">
                        <img src={Html} className="btn-image" alt="nodeimg" />
                    </button>
                    <button type="button" className="btn btn-primary" >
                    <img src={css}  className="btn-image" alt="nodeimg" />
                    </button>
                    <button type="button" className=" btn-primary" >
                    <img src={react}  className="btn-image" alt="nodeimg" />
                    </button>
                    <button type="button" className=" btn-primary" >
                    <img src={node}  className="btn-image"  alt="nodeimg" />
                    </button>
                    <button type="button" className=" btn-primary" >
                    <img src={mong} style={{height:"50px"}}  className="btn-image"  alt="nodeimg" />
                    </button>
                </div>
                </div>
                <div className="onlinebtn">
                    <div className="buttonss" >
                       
                          <a href="https://github.com/yuvrajsingh176/Jobfolio">  <button>     <FaGithubAlt /> Github</button></a>
                    </div>
                                <div className="buttonss">
                                    <a href="https://jobfolioo.onrender.com/landing">
                                    <button><CgMediaLive/> Live</button>
                                    
                                    </a>
                            </div>
                </div>
       
            </div>
        </div>     
           
            
        </div>
        
       
        <div className='cards' >
        <div className="card">
            <div style={{margin:"1rem"}}>
            <div style={{display:"flex",justifyContent:"center",margin:'10px'}}>
            <img src={i} alt="" style={{width:"80%",height:"6rem"}}/>

            </div>
            <div >
                <h2 style={{fontSize:"2em",justifyContent:"center",display:"flex"}}>{titles[1]}</h2>
                    <h2 style={{ fontSize: "1em", justifyContent: "center", display: "flex" }}>{desc[1]}</h2>
            </div>
            <div className="tech-stack">
                <p style={{display:'flex',justifyContent:"center"}}>Tech Stack</p>
                <div className="boxx">
                    <button type="button" className="btn btn-primary">
                        <img src={Html} className="btn-image" alt="nodeimg" />
                    </button>
                    <button type="button" className="btn btn-primary" >
                    <img src={css}  className="btn-image" alt="nodeimg" />
                    </button>
                    <button type="button" className="btn btn-primary" >
                    <img src={js}  className="btn-image" alt="nodeimg" />
                    </button>
                    
                 
                </div>
                </div>
                <div className="onlinebtn">
                    <div className="buttonss" >
                                    <a href="https://github.com/yuvrajsingh176/Mapty">
                                    <button>     <FaGithubAlt /> Github</button>
                                    
                                    </a>
                    </div>
                                <div className="buttonss">
                                    <a href="https://bankist-five-sable.vercel.app/">
                            <button><CgMediaLive/> Live</button>
                                    
                                    </a>
                            </div>
                </div>
       
            </div>
        </div>     
           
            
        </div>
        <div className='cards' >
        <div className="card">
            <div style={{margin:"1rem"}}>
            <div style={{display:"flex",justifyContent:"center",margin:'10px'}}>
            <img src={ec} alt="" style={{width:"80%",height:"6rem"}}/>

            </div>
            <div >
                <h2 style={{fontSize:"2em",justifyContent:"center",display:"flex"}}>{titles[2]}</h2>
                    <h2 style={{ fontSize: "1em", justifyContent: "center", display: "flex" }}>{desc[2]}</h2>
            </div>
            <div className="tech-stack">
                <p style={{display:'flex',justifyContent:"center"}}>Tech Stack</p>
                <div className="boxx">
                    <button type="button" className="btn btn-primary">
                        <img src={Html} className="btn-image" alt="nodeimg" />
                    </button>
                    <button type="button" className="btn btn-primary" >
                    <img src={css}  className="btn-image" alt="nodeimg" />
                    </button>
                    <button type="button" className=" btn-primary" >
                    <img src={react}  className="btn-image" alt="nodeimg" />
                    </button>
                 
                    <button type="button" className=" btn-primary" >
                    <img src={fb}  className="btn-image" alt="nodeimg" />
                    </button>
                </div>
                </div>
                <div className="onlinebtn">
                    <div className="buttonss" >
                       <a href="https://github.com/yuvrajsingh176/my-kartt">
                                        <button>     <FaGithubAlt /> Github</button>
                                        </a>
                    </div>
                    <div className="buttonss">
                         <a href="https://mykart-4caa5.web.app/">
                                    <button><CgMediaLive /> Live</button>
                                    </a>
                                </div>
                </div>
       
            </div>
        </div>     
           
            
        </div>
            </div>
            </div>
    
    )
}
export default Project;
