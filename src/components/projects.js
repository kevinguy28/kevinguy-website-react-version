import React from 'react';

function Projects(){
  return(
    <>
      <div id="projects" class="header">
        <span class="headerText">projects</span>
      </div>
      <div class="projectContainer">
        <div class="projectName">
          Tic-Tac-Toe :
        </div>
        <div class="theProject">
          A simple game of Tic-Tac-Toe coded using HTML, CSS and Javascript!
        </div>
        <a href="tic-tac-toe.html" class="playButton playButtonLoad">
          <div class="playButtonText"> Play Tic-Tac-Toe</div>
        </a>
      </div>
      <div class="projectContainer">
        <div class="projectName">
          Weather :
        </div>
        <div class="theProject">
          Using OpenWeatherMap's API, HTML, CSS and Javascript, you can check the
          weather of any city in the world!
        </div>
        <a href="weather.html" class="playButton playButtonLoad">
          <div class="playButtonText"> Check the weather</div>
        </a>
      </div>
      <div class="projectContainer">
        <div class="projectName">
          Esports-Enycyclopedia :
        </div>
        <div class="theProject">
          Using HTML, CSS, Javascipt, PHP, & MySQL, you can find more about Esport teams
          and players!
        </div>
        <a href="http://3.230.1.132/" target="_blank" rel="noreferrer" class="playButton playButtonLoad">
          <div class="playButtonText"> Learn about Esports</div>
        </a>
      </div>
    </>
  );
}

export default Projects;
