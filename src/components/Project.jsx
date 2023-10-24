import Card from './Card';
import './Projects.css';
const Project =() => {
    
    return (<div>
        <div style={{display:"grid", justifyContent:"center",paddingTop:"1rem"}}>
            <p style={{fontSize:"2rem"}}>My Recent <span className='purple'> Works</span></p>
            <p style={{fontSize:"1rem"}} >Here are few projects I have worked upon</p>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
            <Card />
        
            
        </div>
    </div>)
}
export default Project;
