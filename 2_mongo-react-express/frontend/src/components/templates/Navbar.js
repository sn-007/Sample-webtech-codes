import React, {Component} from 'react';
import { BrowserRouter as Router,  Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default class NavBar extends Component {
    
    

    render() {
        return (
            <div style={{paddingBottom: 30 }}>                
                <nav className="navbar navbar-expand-lg navbar-light" style={{ color: "Green", backgroundColor: "#e3f2fd"}} >
                   
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link"><h4>HOME</h4></Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/newdonation" className="nav-link"><h4>DONATE</h4></Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/listdonations" className="nav-link"><h4>DATA</h4></Link>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}