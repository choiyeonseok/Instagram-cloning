import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";


class Footer extends React.Component {
    
    static contextTypes = {
        t: PropTypes.func.isRequired,

    };

    render(){
        console.log(this.context);
        return(
            <footer className="footer">
                <div className="column">
                    <nav className="nav">
                        <ul className="list">
                            <li className="list-item">{this.context.t("About Us")}</li>
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
        )
    }
}

// const Footer = (props, context) => (
//     <footer className="footer">
//         <div className="column">
//             <nav className="nav"> 
//                 <ul className="list">
//                     <li className="list-item">About Us</li>
//                     <li className="list-item">Support</li>
//                     <li className="list-item">Blog</li>
//                     <li className="list-item">Press</li>
//                     <li className="list-item">API</li>
//                     <li className="list-item">Jobs</li>
//                     <li className="list-item">Privacy</li>
//                     <li className="list-item">Terms</li>
//                     <li className="list-item">Directory</li>
//                     <li className="list-item">Languages</li>
//                 </ul>
//             </nav>
//         </div>
//         <div className="column">
//             <span className="copyright">&copy; 2019 nomadgram</span>
//         </div>
//     </footer>
// );



export default Footer;

