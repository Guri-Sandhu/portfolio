import React from 'react';
import './App.scss';
// import { getJSONData } from "./Tools/Toolkit";
// import LoadingOverlay from './LoadingOverlay/LoadingOverlay';
import { Link, Route, Switch } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Mainpage from "./Mainpage/Mainpage";
import Projects from "./Projects/Projects";
import ContactForm from "./ContactForm/ContactForm";

const App = ():JSX.Element => {

  const isMobileorTab = useMediaQuery({
    query: '(max-device-width: 960px)'
  })

  const openMenu = ():void => {
    setShowNav(!showNav);
  }

  const openFormDisplay = ():void => {
    setShowForm(!showNav);
  }

  // const [loading, setLoading] = React.useState<boolean>(true);
  const [showNav, setShowNav] = React.useState<boolean>(false);
  const [navNum, setNavNum] = React.useState<number>(0);
  const [showForm, setShowForm] = React.useState<boolean>(false);
  // const [openForm, setOpenForm] = React.useState<boolean>(false);

  return (
    <div className="main">
      {/* <LoadingOverlay bgColor="#DADED4" spinnerColor="#FFFFFF" enabled={loading} /> */}

      {/* <div style={{display: (showForm ? 'flex' : 'none')}}>< ContactForm /></div> */}

      <div className="header">
        <div className="header__title"><img src="logogs.svg" alt="dsf" height="152px" width="142px"></img></div>
        <div className="header__menuBtn"><img className="header__menuBtn__icon" src="menuredysvg.svg" alt="dsf" height="50px" width="50px" onClick={openMenu}></img></div>
      </div>

      {isMobileorTab &&
        <div className="shortNav" style={{display: (showNav ? 'flex' : 'none')}}>
          <Link to="/" className={"shortNav__link "  + (navNum === 1 ? 'click' : '')} onClick={(e) => setNavNum(1)}>Home</Link>
          <Link to="/projects" className={"shortNav__link "  + (navNum === 2 ? 'click' : '')} onClick={(e) => setNavNum(2)}>Projects</Link>
          <Link to="/" className={"shortNav__link "  + (navNum === 3 ? 'click' : '')} onClick={(e) => setNavNum(3)}>About</Link>
          <Link to="/contact" className={"shortNav__link "  + (navNum === 4 ? 'click' : '')} onClick={(e) => setNavNum(4)}>Contact</Link>
            <span onClick={(e) => setShowNav(false)}>X</span>
        </div>
}
      
      <div className="subSection">
        <div className="nav">
          <Link to="/" className={"nav__link "  + (navNum === 1 ? 'click' : '')} onClick={(e) => setNavNum(1)}>Home</Link>
          <Link to="/projects" className={"nav__link "  + (navNum === 2 ? 'click' : '')} onClick={(e) => setNavNum(2)}>Projects</Link>
          <Link to="/" className={"nav__link "  + (navNum === 3 ? 'click' : '')} onClick={(e) => setNavNum(3)}>About</Link>
          <Link to="/contact" className={"nav__link "  + (navNum === 4 ? 'click' : '')} onClick={(e) => setNavNum(4)}>Contact</Link>
        </div>

        <div className="changesection">
          <Switch>
              <Route 
                path="/"
                render={() => <Mainpage navNumber={setNavNum} />}
                exact
              />
              
              <Route 
                path="/main"
                render={() => <Mainpage navNumber={setNavNum} />}
              />

              <Route 
                path="/projects"
                render={() => <Projects />}
              />

              <Route 
                path="/contact"
                render={() => <ContactForm />}
              />

              {/* <Route 
                path="/about"
                render={() => <DeleteTech technologies={technologies} setLoading={setLoading} setRefreshData={setRefreshData} />}
              />

              <Route 
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

        <div className="socialMedia">
          <a href="https://www.instagram.com/gurnihalsandhu/" target="blank" ><img src="insta.svg" alt="Link to Instagram" height="40px" width="40px"></img></a>
          <a href="https://www.facebook.com/guri.sandhu47/" target="blank" ><img src="facebook.svg" alt="Link to Facebook" height="40px" width="40px"></img></a>
          <a href="https://www.linkedin.com/in/gurnihal-singh-195b321b8/" target="blank" ><img src="linkedin.svg" alt="Link to LinkedIn" height="40px" width="40px"></img></a>
          <a href="https://github.com/Guri-Sandhu" target="blank" ><img src="github.svg" alt="Link to Github" height="40px" width="40px"></img></a>

        </div>
      </div>

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
