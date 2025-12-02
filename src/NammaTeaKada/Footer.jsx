import React from "react";
import './Footer.css';

function Footer(){
     return (
    <footer className="footer">
      <p>
        Copyright © Namma Teakada {new Date().getFullYear()} 
      </p>
      <div className="footer-links">
        
        <a href="https://www.facebook.com/share/1D7R6XvCwF/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
           <img style={{height: "30px", width: "30px", borderRadius: "50%"}} src="\assets\images\face.jpeg" alt="" />
        </a>
        <a href="https://www.instagram.com/namma_teakada_studios?igsh=ZTJuYWNjZnM4MTZi&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <img style={{height: "30px", width: "30px", borderRadius: "50%"}} src="\assets\images\ins.jpeg" alt="" />
        </a>
        <a href="https://youtube.com/@nammateakada?si=O2IPj5H9xLMhLhOs" target="_blank" rel="noopener noreferrer">
           <img style={{height: "30px", width: "30px", borderRadius: "50%"}} src="\assets\images\you.jpeg" alt="" />
        </a>
      </div>
    </footer>
  );
  
    
}   
export default Footer;