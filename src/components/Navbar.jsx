import "./Navbar.css";
import { FiHome } from  'react-icons/fi'
import { BsFillPersonFill } from 'react-icons/bs'
import { SiGooglescholar } from 'react-icons/si'
import { PiProjectorScreenChartThin } from 'react-icons/pi'
import { PiCertificateBold } from 'react-icons/pi'
import {FcDocument} from 'react-icons/fc'
const Navbar = () => {
    const handleScroll = (elementId) => {
        scrollTo(elementId);
    }
    return (
        <div className="navbar navbar navbar-expand-md navbar-light fixed-top">
            <div className="container">
                <a href="/" className="d-flex navbar-brand" onClick={() => {
                    handleScroll("/");
                }}> 
                    <h1 className="logo-text">yuvi</h1>
                </a>
                <div className="navbar-collapse collapse">
                    <div className="ms-auto navbar-nav">
                        <div className="nav-item">
                            <a className="nav-link" href="#home" onClick={() => {
                                handleScroll("home");
                            }}>
                                <FiHome/>
                                <span className="intro">Home</span>

                            </a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="#about" onClick={() => {
                                handleScroll("about");
                            }}>
                                <BsFillPersonFill/>
                                <span className="intro">About</span>

                            </a>
                        </div>
                       
                        <div className="nav-item">
                            <a className="nav-link" href="#projects" onClick={() => {
                                handleScroll("projects");
                            }}>
                                <PiProjectorScreenChartThin/>
                                <span className="intro">Projects</span>

                            </a>
                        </div>
                 
                        <div className="nav-item">
                            <a className="nav-link" href="https://drive.google.com/file/d/17ZE6LAeUrRuRR1kCgM_i5ui4kNTWhsNK/view?usp=sharing">
                                <FcDocument/>
                                <span className="intro">Resume</span>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;