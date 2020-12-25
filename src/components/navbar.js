import React from 'react';

function Navbar(){
  return(
    <div class="navBarContainer">
      <div class="navBarBox">
        <a class="navBarBoxText" href="/"> <b>Home </b></a>
      </div>
      <div class="navBarBox">
        <a class="navBarBoxText" href="/#projects"> <b>Project </b></a>
      </div>
      <div class="navBarBox">
        <a class="navBarBoxText" href="/#workExperience"> <b>Experience</b></a>
      </div>
    </div>
  );
}

export default Navbar;
