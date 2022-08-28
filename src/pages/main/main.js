import {Component} from 'react';
import './main.css';
import logo from 'assets/img/logo.svg';

class Main extends Component {

    render() {
        return (
            <div className="main">
                <div className="main-header">
                    <img src={logo} className="logo" alt="logo"/>
                </div>
                <div className="main-content">
                    
                </div>
            </div>
        )
    }
}

export default Main;
