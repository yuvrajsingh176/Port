import "./Navbar.css";
import { BiSolidHomeHeart } from 'react-icons/bi' 
import { BsFillPersonFill } from 'react-icons/bs'
import { SiGooglescholar } from 'react-icons/si'
import { PiProjectorScreenChartThin } from 'react-icons/pi'
import { PiCertificateBold } from 'react-icons/pi'
import {FcDocument} from 'react-icons/fc'
const Navbar = () => {
    return (
        <div className="navbar navbar navbar-expand-md navbar-light fixed-top">
            <div className="container">
                <a href="/" className="d-flex navbar-brand"> 
                    <h1 className="logo-text">yuvi</h1>
                </a>
                <div className="navbar-collapse collapse">
                    <div className="ms-auto navbar-nav">
                        <div className="nav-item">
                            <a className="nav-link" href="/#home">
                                <BiSolidHomeHeart/>
                                <span className="intro">Home</span>

                            </a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="/#home">
                                <BsFillPersonFill/>
                                <span className="intro">About</span>

                            </a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="/#experience">
                                <SiGooglescholar/>
                            <span className="intro">Experience</span>
                            </a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="/#projects">
                                <PiProjectorScreenChartThin/>
                                <span className="intro">Projects</span>

                            </a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="/#certifications">
                                <PiCertificateBold/>
                                <span className="intro">Certifications</span>

                            </a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="/#resume">
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