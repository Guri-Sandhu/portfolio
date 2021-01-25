import React from 'react';
// Importing Components
import "./About.scss";

// This is the about page component
const About = ():JSX.Element => {

    return (
        <div className="about">

            <div className="about__rightSide">
                <img src="./main.jpg" alt="gurnihal singh"></img>
            </div>

            <div className="about__leftSide">
                <div className="about__leftSide--heading">About Me</div>
                <p>I am a Final Year international student, studying IT Web Programming at NSCC, Truro. 
                    The curiosity of computers and passion for problem solving brought me to the field of IT.
                </p>
                <p> Well-organised and a patient person with zeal for building web applications.</p>
                <h4>My interests Include:</h4>
                <div className="interests"><span><i className="fas fa-basketball-ball"></i>&nbsp; Watching NBA</span><span><i className="fab fa-playstation"></i>&nbsp;Playing Warzone</span><span><i className="fas fa-cat"></i>&nbsp;Bugging my Cat</span></div>
            </div>
        </div>
    );
}

export default About;