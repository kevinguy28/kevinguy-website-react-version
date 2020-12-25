import React from 'react';
import './CSS/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Parallax from './components/parallax.js';
import Navbar from './components/navbar.js';
import AboutMe from './components/aboutme.js';
import ProgrammingLanguages from './components/programminglanguages.js'
import Projects from './components/projects.js';
import WorkExperience from './components/workexperience.js';
import Tic_Tac_Toe from './components/tic-tac-toe.js';
import Weather from './components/weather.js';

function App() {
  return (
    <>
      <Parallax />
      {/* <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/about" exact component={AboutMe}/>
            <Route path="/shop" exact component={Shop}/>
          </Switch>
        </div>
      </Router> */}
      <Navbar />
      {/* <AboutMe />
      <ProgrammingLanguages />
      <Projects />
      <WorkExperience /> */}
      <Router>
        <Route path="/" exact component={AboutMe} />
        <Route path="/" exact componenet={ProgrammingLanguages} />
        <Route path="/" exact component={Projects} />
        <Route path="/" exact component={WorkExperience} />
        <Route path="/tic-tac-toe.html" exact component={Tic_Tac_Toe} />
        <Route path="/weather.html" exact component={Weather} />
      </Router>
      <div style={{height: "2000px"}}></div>
    </>
  );
}
export default App;
