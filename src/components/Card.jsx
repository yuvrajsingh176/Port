import "./Card.css"
import f from "../assets/j-f.png";
const Card = () => {
    return (
        <div className="card">
            <img src={f} style={{width:'100px',height:"100px",justifyContent:"center",display:"flex"}} alt="first image" />
            <div >
                <h2 style={{fontSize:"2em",justifyContent:"center",display:"flex"}}>Jobify</h2>
                <h2 style={{fontSize:"1em"}}>Job portal for fetching and updating jobs</h2>
            </div>
            <div className="tech-stack">
                <div className="boxx">
                
                </div>
            </div>
       
        </div>       
    )
}
export default Card;