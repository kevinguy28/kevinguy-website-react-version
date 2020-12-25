import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import '../CSS/App.css';

function ProgrammingLanguages(){
  return(
    <div id="programLangContainer">
      <div class="programmingLangIconContainer">
        <div class="languageIcon"><p class="programText"> <b>Java</b></p><FontAwesomeIcon icon={faJava} size="5x" /></div>
        <div class="languageIcon"><p class="programText"> <b>Python</b></p><FontAwesomeIcon icon={faPython} size="5x" /></div>
        <div class="languageIcon"><p class="programText"> <b>HTML</b></p><FontAwesomeIcon icon={faHtml5} size="5x" /></div>
        <div class="languageIcon"><p class="programText"> <b>CSS</b></p><FontAwesomeIcon icon={faCss3Alt} size="5x" /></div>
        <div class="languageIcon"><p class="programText"> <b>JavaScript</b></p><FontAwesomeIcon icon={faJs} size="5x" /></div>
      </div>
    </div>
  );
}

export default ProgrammingLanguages;
