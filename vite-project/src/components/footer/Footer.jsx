import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <div className="wer">
        <div className="footercontent">
          <span className="title">
            <b>HOME</b>
          </span>
          <br />
          <span className="contenttitle">
            SPI <br />
          </span>
          <span className="contenttitle">
            SSI <br />
          </span>
          <span className="contenttitle">
            SRI <br />
          </span>
          <span className="contenttitle">
            About us <br />
          </span>
        </div>


        <div className="footercontent">
          <span className="title">
            <b>CONNECT WITH US</b>
          </span>
          <br />
          <span className="contenttitle" style={{padding:"1rem", fontSize:"2rem"}}>
          <FontAwesomeIcon icon={faTwitter}/>
          </span>
          <span className="contenttitle" style={{padding:"1rem", fontSize:"2rem"}}>
             <FontAwesomeIcon icon={faInstagram}/>
          </span>
        </div>
        
      </div>
      
    </div>
  );
}
