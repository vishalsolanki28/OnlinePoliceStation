import React from "react";
import { Route , SwitchProps} from "react-router";
import "./CSS/header.css";

// import { Link, useHistory, useLocation } from "react-router-dom";

const Header= () => {
  return (
  


    <div className="head">
   
      <div className="navbar">
        <div className="navbar-logo">
        
          <ul>
            <li></li>
          </ul>
        </div>
        <ul>
          <li>

 
            
            <a href=''> HOME</a>
          
            </li>
          <li>
            <a href="">COMPLAINTS</a>
          </li>
          <li>
            <a href="">RESULTS</a>
          </li>
          <li>
            <a href="">DATA</a>
          </li>
        </ul>
        <div className="navbar-a">
          <ul>
            <li>
              <a href="" className="signup">
              
                sign in
              </a>
            </li>
            <li>
              <a href="" className="login">
                
                login
              </a>
            </li>

            </ul>

          </div>
      </div>
    </div>
   
  );
}

export default Header;
