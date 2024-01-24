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
import netflix from '../assets/Netflix.png'
import feed from '../assets/Feed.png'
import timezone from '../assets/Timezone.png'
const Project =() => {
    const titles = ["Jobify", "NetflixGpt","ecommerce","Mapty","Tweetx","Timezone"];
    const desc = ["MERN application, companies could list job openings, monitor job statuses, make edits to job postings, and track application statuses, which could have helped the Job seekers in this Competitive market.",
        "Utilizing a geolocation API, I retrieved the realtime location of the user and monitored their active cycling and running sessions. This allowed for the organization of cycling activities based on dates, enabling the addition of details such as distance covered, duration, and cadence.",
    "Multilingual movie magic! Explore a world of films with 3 languages, secure logins, personalized recommendations powered by ChatGPT, and seamless responsiveness for all screens."
   ,"Imagine a vibrant online stage where voices take flight! Craft 280-character micro-blogs, ignite conversations, and find kindred spirits. Sign up, personalize your corner, and unleash your inner tweeter. Follow friends, delve into trending topics." 
    ,"Unwind time's tapestry!  Search cities, witness their present with a click. Sunrise, sunset, a glimpse beyond? Travel the world from your screen - Time Traveler awaits."
    ]
    return (
        <div className='main-div' id="projects">
        <div style={{display:"grid", justifyContent:"center",paddingTop:"1rem"}}>
            <p style={{fontSize:"3rem",fontWeight:"bold"}}>My Recent <span className='purple'> Works</span></p>
            </div>
        <div className='projects-col' >
      
        <div className='cards' >
        <div className="card">
            <div style={{margin:"1rem"}}>
            <div style={{display:"flex",justifyContent:"center",margin:'10px'}}>
            <img src={f} alt="" style={{width:"100%",height:"10rem"}}/>

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
            <img src={netflix} alt="" style={{width:"100%",height:"10rem"}}/>

            </div>
            <div >
                <h2 style={{fontSize:"2em",justifyContent:"center",display:"flex"}}>{titles[1]}</h2>
                    <h2 style={{ fontSize: "1em", justifyContent: "center", display: "flex" }}>{desc[2]}</h2>
            </div>
            <div className="tech-stack">
                <p style={{display:'flex',justifyContent:"center"}}>Tech Stack</p>
                <div className="boxx">
                <button type="button" className=" btn-primary" >
                <img src={react}  className="btn-image" alt="nodeimg" />
                </button>
                <button type="button" className=" btn-primary" >
                <img src={fb}  className="btn-image" alt="nodeimg" />
                                    </button>
                                    <button type="button" className=" btn-primary" >
                                    <img src="https://th.bing.com/th?id=OIP.LOZctQTRjEnOcFUtVBaj-AHaDm&w=350&h=169&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"  className="btn-image" alt="nodeimg" />
                                    </button>  
                                    <button type="button" className=" btn-primary" >
                                    <img src="                                    data:image/jpeg;base64,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"  className="btn-image" alt="nodeimg" />
                                    </button>  
                 
                </div>
                </div>
                <div className="onlinebtn">
                    <div className="buttonss" >
                                    <a href="https://github.com/yuvrajsingh176/Netflixgpt">
                                    <button>     <FaGithubAlt /> Github</button>
                                    
                                    </a>
                    </div>
                                <div className="buttonss">
                                    <a href="https://zingy-semolina-2c12ed.netlify.app/">
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
            <img src={feed} alt="" style={{width:"100%",height:"10rem"}}/>

            </div>
            <div >
                <h2 style={{fontSize:"2em",justifyContent:"center",display:"flex"}}>{titles[4]}</h2>
                    <h2 style={{ fontSize: "1em", justifyContent: "center", display: "flex" }}>{desc[3]}</h2>
            </div>
            <div className="tech-stack">
                <p style={{display:'flex',justifyContent:"center"}}>Tech Stack</p>
                <div className="boxx">
                <button type="button" className=" btn-primary" >
                <img src={react}  className="btn-image" alt="nodeimg" />
                </button>
                <button type="button" className=" btn-primary" >
                <img src={fb}  className="btn-image" alt="nodeimg" />
                                    </button>
                                    <button type="button" className=" btn-primary" >
                                    <img src="https://th.bing.com/th?id=OIP.LOZctQTRjEnOcFUtVBaj-AHaDm&w=350&h=169&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"  className="btn-image" alt="nodeimg" />
                                                        </button>             
                 
                </div>
                </div>
                <div className="onlinebtn">
                    <div className="buttonss" >
                       <a href="https://github.com/yuvrajsingh176/omnitweet">
                                        <button>     <FaGithubAlt /> Github</button>
                                        </a>
                    </div>
                    <div className="buttonss">
                         <a href="https://thriving-pie-aca20c.netlify.app/">
                                    <button><CgMediaLive /> Live</button>
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
                    <img src={timezone} alt="" style={{width:"100%",height:"10rem"}}/>
        
                    </div>
                    <div >
                        <h2 style={{fontSize:"2em",justifyContent:"center",display:"flex"}}>{titles[5]}</h2>
                            <h2 style={{ fontSize: "1em", justifyContent: "center", display: "flex" }}>{desc[4]}</h2>
                    </div>
                    <div className="tech-stack">
                        <p style={{display:'flex',justifyContent:"center"}}>Tech Stack</p>
                        <div className="boxx">
                           
                            <button type="button" className=" btn-primary" >
                            <img src={react}  className="btn-image" alt="nodeimg" />
                            </button>
                         
                         
                        </div>
                        </div>
                        <div className="onlinebtn">
                            <div className="buttonss" >
                               <a href="https://github.com/yuvrajsingh176/timezone">
                                                <button>     <FaGithubAlt /> Github</button>
                                                </a>
                            </div>
                            <div className="buttonss">
                                 <a href="https://timezone-delta.vercel.app/">
                                            <button><CgMediaLive /> Live</button>
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
                    <img src={ec} alt="" style={{width:"100%",height:"10rem"}}/>
        
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
