import {Component} from 'react';
import './main.css';
import logo from 'assets/img/logo.svg';

class Main extends Component {

    render() {
        return (
            <div className="main">
                <div className="main-header">
                    <div className="header-left">
                        <img src={logo} className="logo" alt="logo"/>
                        <div className="header-title">Angular</div>
                        <div> ( ͡° ͜ʖ ͡°)</div>
                    </div>
                    <div className="header-right">
                        <div className="header-tab">Help</div>
                        <div className="header-tab">Content</div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="resume-box">{/* Wrapper for typewriter */}
                        <div className="resume">Resume:</div>
                        <div className="resume-position">Web dev noob</div>
                        <div className="typewriter">
                            - Implemented a typewriter effect using ctrl + c/v
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
