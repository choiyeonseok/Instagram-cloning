import React from "react";
import "./styles.scss";



const Footer = (props, context) => (
    <footer className="footer">
        <div className="column">
            <nav className="nav"> 
                <ul className="list">
                    <li className="list-item">About Us</li>
                    <li className="list-item">Support</li>
                    <li className="list-item">Blog</li>
                    <li className="list-item">Press</li>
                    <li className="list-item">API</li>
                    <li className="list-item">Jobs</li>
                    <li className="list-item">Privacy</li>
                    <li className="list-item">Terms</li>
                    <li className="list-item">Directory</li>
                    <li className="list-item">Languages</li>
                </ul>
            </nav>
        </div>
        <div className="column">
            <span className="copyright">&copy; 2019 nomadgram</span>
        </div>
    </footer>
);



export default Footer;

