import React from 'react';
import kevin from '../Image/kevin1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

function AboutMe(){
  return(
    <div id="aboutMeContainer">
      <div id="aboutMeTextBox1">
        <span id="aboutMeText"><b> about me </b></span>
      </div>
      <div id="aboutMeBox">
        <div id="aboutMeBox1">
          My name is Kevin and I major in Computer Science at Ryerson
          University. <br></br><br></br>
          In my spare time I like to do web development and I enjoy making
          small games. <br></br><br></br> The programming languages I currently know are
          listed below!
        </div>
        <div id="filler"></div>
        <div id="aboutMeBox2">
          <div id="kevinPictureContainer">
            <img id="kevinPicture" src={kevin} alt="kevin tran"></img>
          </div>
          {/* <div class="social-icons">
            <a class="linkedIn" href="https://www.linkedin.com/in/kevin-tran-7471371a0/LinkedIn/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faLinkedin} size="lg" /></a>
            <a class="gitHub" href="https://github.com/kevinguy28" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faGithub} /></a>
            <a class="instagram" href="https://www.instagram.com/kevinguy28/?hl=en" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faInstagram} /></a>
          </div> */}
          <div id="test">
            <li><FontAwesomeIcon className="fa" icon={faLinkedinIn} size="lg" /></li>
            <li><FontAwesomeIcon className="fa" icon={faGithub} size="lg" /></li>
            <li><FontAwesomeIcon className="fa" icon={faInstagram} size="lg" /></li>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
