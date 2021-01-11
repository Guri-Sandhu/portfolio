import React from 'react';
import './App.scss';
import { getJSONData } from "./Tools/Toolkit";
import LoadingOverlay from './LoadingOverlay/LoadingOverlay';
import { Route, Switch } from 'react-router-dom';

import Mainpage from "./Mainpage/Mainpage";

const App = ():JSX.Element => {

  const openMenu = ():void => {
    setShowNav(!showNav);
  }


  const [loading, setLoading] = React.useState<boolean>(true);
  const [showNav, setShowNav] = React.useState<boolean>(false);

  return (
    <div className="main">
      {/* <LoadingOverlay bgColor="#DADED4" spinnerColor="#FFFFFF" enabled={loading} /> */}

      <div className="header">
        <div className="header__title"><img src="logogs.svg" alt="dsf" height="152px" width="142px"></img></div>
        <div className="header__menuBtn"><img className="header__menuBtn__icon" src="menuredysvg.svg" alt="dsf" height="50px" width="50px" onClick={openMenu}></img></div>
      </div>

      <div className="shortNav" style={{display: (showNav ? 'flex' : 'none')}}>
          <a className="nav__link" href="/">Home</a>
          <a className="nav__link" href="/">Projects</a>
          <a className="nav__link" href="/">About</a>
          <a className="nav__link" href="/">Contact</a>
          <span onClick={(e) => setShowNav(false)}>X</span>
        </div>
      
      <div className="subSection">
        <div className="nav">
          <a className="nav__link" href="/">Home</a>
          <a className="nav__link" href="/">Projects</a>
          <a className="nav__link" href="/">About</a>
          <a className="nav__link" href="/">Contact</a>
        </div>

        <div className="changesection">
          <Switch>
              <Route 
                path="/"
                render={() => <Mainpage />}
                exact
              />
              
              <Route 
                path="/main"
                render={() => <Mainpage />}
              />

              {/* <Route 
                path="/projects"
                render={() => <Tech technologies={technologies} courses={courses} setLoading={setLoading} setRefreshData={setRefreshData} />}
              />

              <Route 
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
          <img src="insta.svg" height="40px" width="40px"></img>
          <img src="facebook.svg" height="40px" width="40px"></img>
          <img src="linkedin.svg" height="40px" width="40px"></img>
          <img src="github.svg" height="40px" width="40px"></img>

        </div>
      </div>
    </div>
  );
}

export default App;
