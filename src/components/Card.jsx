import "./Card.css"
import node from "../assets/node.svg"
import Html from "../assets/css.svg"
import css from "../assets/css-3-svgrepo-com.f1823d8606e24164d5ac03b4e9b80d85.svg"
import react from "../assets/react.svg"
import mong from "../assets/MongoDB_Logomark_ForestGreen.png"
import { FaGithubAlt } from 'react-icons/fa'
import {CgMediaLive} from "react-icons/cg"
const Card = (props) => {
    return (
 <div className="card">
            <div style={{margin:"1rem"}}>
            <div style={{display:"flex",justifyContent:"center",margin:'10px'}}>
            <img src={props.pic} alt="" style={{width:"80%",height:"6rem"}}/>

            </div>
            <div >
                <h2 style={{fontSize:"2em",justifyContent:"center",display:"flex"}}>{props.title}</h2>
                    <h2 style={{ fontSize: "1em", justifyContent: "center", display: "flex" }}>{ props.desc}</h2>
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
                       
                            <button>     <FaGithubAlt /> Github</button>
                    </div>
                    <div className="buttonss">
                            <button><CgMediaLive/> Live</button>
                            </div>
                </div>
       
            </div>
        </div>     
       
    )
}
export default Card;