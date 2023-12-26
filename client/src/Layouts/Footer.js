// Footer.js
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
       <center>
      <div style={{display:"flex",justifyContent:"center",padding:"10px",color:"white"}}>
       
        <img src="images/facebook.png" alt="" style={{height:"50px",widht:"50px",margin:"0px 30px"}} />
        <img src="images/instagram.png" alt="" style={{height:"50px",widht:"50px",margin:"0px 30px"}} />
        <img src="images/twitter.png" alt="" style={{height:"50px",widht:"50px",margin:"0px 30px"}} />
        <img src="images/youtube.png" alt="" style={{height:"50px",widht:"50px",margin:"0px 30px"}} />
        <img src="images/whatsapp.png" alt="" style={{height:"50px",widht:"50px",margin:"0px 30px"}} />
        
      </div>
      <p>&copy;  ReelVista a Movie App ~2023 </p>
      </center>
    </footer>
  );
};

export default Footer;
