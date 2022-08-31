import {Component} from 'react';
import './main.css';
import logo from 'assets/img/logo.svg';

class Main extends Component {

    render() {
        return (
            <div className="main">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid ps-2">
                        <a className="navbar-brand d-flex flex-row align-items-center" href="/">
                            <img src={logo} className="logo me-1" alt='logo'/>
                            <div>Angular ( ͡° ͜ʖ ͡°)</div>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar1" aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse flex-grow-0" id="navbar1">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="main-content p-3 text-white">
                    <div className="resume-box d-inline-block">{/* Wrapper for typewriter */}
                        <div className="resume">Resume:</div>
                        <div className="resume-position">Web dev noob</div>
                        <div className="resume-content typewriter">
                            - Implemented a typewriter effect using ctrl + c/v
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
