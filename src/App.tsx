// Importing required modules
import React from 'react';
import './App.scss';
import { Link, Route, Switch } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// Importing Components
import Mainpage from "./Mainpage/Mainpage";
import Projects from "./Projects/Projects";
import ContactForm from "./ContactForm/ContactForm";
import About from "./About/About";
import Skills from "./Skills/Skills";
import LoadingOverlay from './LoadingOverlay/LoadingOverlay';
import pdf from "./Assets/resume.pdf";

const App = ():JSX.Element => {

  // To check if the viewport size is mobile or tab to change navigation style
  // and turn mobile nav off
  const isMobileorTab = useMediaQuery({
    query: '(max-device-width: 960px)'
  })

  // Set to open navigation menu on mobile or tab
  const openMenu = ():void => {
    setShowNav(!showNav);
  }

  

  // Sets the loading overlay and navigation number to display the background scribble
  const setLoadAndNav = (num:number):void => {
    setLoading(true);
    setNavNum(num);
    setInterval(() => setLoading(false), 2000);
    setShowNav(false);
  }

  // Use state variables
  const [loading, setLoading] = React.useState<boolean>(false);
  const [showNav, setShowNav] = React.useState<boolean>(false);
  const [navNum, setNavNum] = React.useState<number>(0);

  return (
    <div className="main">
      {/* Loading overlay is enabled every time new component is loaded */}
      <LoadingOverlay  enabled={loading} bgColor="#DADED4" spinnerColor="#FFFFFF" setLoading={setLoading}/>

      {/* This header is for mobile and tabs. Display is none for bigger screens */}
      <div className="header">
        <div className="header__title"><img src="logogs.svg" alt="dsf" height="152px" width="142px"></img></div>
        <div className="header__menuBtn"><img className="header__menuBtn__icon" src="menuredysvg.svg" alt="dsf" height="50px" width="50px" onClick={openMenu}></img></div>
      </div>

      {/* Using react-responsive package to check the screen size and only display mobile navigation if size is right */}
      {isMobileorTab &&
        <div className="shortNav" style={{display: (showNav ? 'flex' : 'none')}}>
          <Link to="/" className={"shortNav__link "  + (navNum === 1 ? 'click' : '')} onClick={(e) => setLoadAndNav(1)}>Home</Link>
          <Link to="/projects" className={"shortNav__link "  + (navNum === 2 ? 'click' : '')} onClick={(e) => setLoadAndNav(2)}>Projects</Link>
          <Link to="/skills" className={"shortNav__link "  + (navNum === 3 ? 'click' : '')} onClick={(e) => setLoadAndNav(3)}>Skills&nbsp;<i className="far fa-arrow-alt-circle-right"></i></Link>
          {/* <Link to="/projects" className={"shortNav__link "  + (navNum === 4 ? 'click' : '')} onClick={(e) => setLoadAndNav(4)}>Resume</Link> */}
          <a className="shortNav__link" href={pdf} target="_blank" rel="noreferrer">Resume&nbsp;< i className="fas fa-download"></i></a>
          <Link to="/about" className={"shortNav__link "  + (navNum === 5 ? 'click' : '')} onClick={(e) => setLoadAndNav(5)}>About</Link>
          <Link to="/contact" className={"shortNav__link "  + (navNum === 6 ? 'click' : '')} onClick={(e) => setLoadAndNav(6)}>Contact</Link>
          <span className="shortNav__link" onClick={(e) => setShowNav(false)}><i className="fas fa-times"></i></span>
        </div>
}
      
      {/* This is the main body of the app. Everything is in it. */}
      <div className="subSection">
        <div className="nav">
          <div className="header__title"><img src="logogs.svg" alt="dsf" height="152px" width="142px"></img></div>
          <Link to="/" className={"nav__link "  + (navNum === 1 ? 'click' : '')} onClick={(e) => setLoadAndNav(1)}>Home</Link>
          <Link to="/projects" className={"nav__link "  + (navNum === 2 ? 'click' : '')} onClick={(e) => setLoadAndNav(2)}>Projects</Link>
          <Link to="/skills" className={"nav__link "  + (navNum === 3 ? 'click' : '')} onClick={(e) => setLoadAndNav(3)}>Skills&nbsp;<i className="far fa-arrow-alt-circle-right"></i></Link>
          {/* <Link to="/projects" href={pdf} target="_blank" className={"nav__link "  + (navNum === 4 ? 'click' : '')} onClick={(e) => setLoadAndNav(4)}>Resume&nbsp;< i className="fas fa-download"></i></Link> */}
          <a className="nav__link" href={pdf} target="_blank" rel="noreferrer">Resume&nbsp;< i className="fas fa-download"></i></a>
          <Link to="/about" className={"nav__link "  + (navNum === 5 ? 'click' : '')} onClick={(e) => setLoadAndNav(5)}>About</Link>
          <Link to="/contact" className={"nav__link "  + (navNum === 6 ? 'click' : '')} onClick={(e) => setLoadAndNav(6)}>Contact</Link>
        </div>

        {/* This is the section which changes everytime from the navigation */}
        <div className="changesection">
          <Switch>
              <Route 
                path="/"
                render={() => <Mainpage navNumber={setLoadAndNav} />}
                exact
              />
              
              <Route 
                path="/main"
                render={() => <Mainpage navNumber={setLoadAndNav} />}
              />

              <Route 
                path="/projects"
                render={() => <Projects />}
              />

              <Route 
                path="/contact"
                render={() => <ContactForm setLoading={setLoading}/>}
              />

              <Route 
                path="/about"
                render={() => <About />}
              />

              <Route 
                path="/skills"
                render={() => <Skills />}
              />

              {/* <Route 
                path="/resume"
                render={() => <CourseEdit courses={courses} setLoading={setLoading} setRefreshData={setRefreshData} />}
              />

              <Route 
                path="/deleteCourse/:id"
                render={() => <DeleteCourse courses={courses} setLoading={setLoading} setRefreshData={setRefreshData} />}
              /> */}

              {/* <Route component={Error} /> */}

          </Switch>
        </div>

        {/* This social media widgets are placed here as they appear on all the pages */}
        <div className="socialMedia">
          <a href="https://www.instagram.com/gurnihalsandhu/" target="blank" ><img src="insta.svg" alt="Link to Instagram" height="40px" width="40px"></img></a>
          <a href="https://www.facebook.com/guri.sandhu47/" target="blank" ><img src="facebook.svg" alt="Link to Facebook" height="40px" width="40px"></img></a>
          <a href="https://www.linkedin.com/in/gurnihal-singh-195b321b8/" target="blank" ><img src="linkedin.svg" alt="Link to LinkedIn" height="40px" width="40px"></img></a>
          <a href="https://github.com/Guri-Sandhu" target="blank" ><img src="github.svg" alt="Link to Github" height="40px" width="40px"></img></a>

        </div>
      </div>

      {/* The footer is also displayed on all the pages */}
      <div className="footer">
        <span>
        &copy; 2021 &nbsp;  
         <a href="https://gurnihalsingh.com/" className="white-text">Gurnihal Singh</a>.
        </span>
      </div>
    </div>
  );
}

export default App;
