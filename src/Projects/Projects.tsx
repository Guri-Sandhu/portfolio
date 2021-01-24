import React from 'react';
import "./Projects.scss";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Jump component which is populated with image thumbnails which can be clicked on to go to a certain image
const Projects = ():JSX.Element => {

    const cardflip = (num:number):void => {
        if(num === cardnum){
            setCardNum(0);
        } else {
            setCardNum(num);
        }
    }


    const [cardnum, setCardNum] = React.useState<number>(0);

    return (
        <div className="project">
            <div className={"card " + (cardnum === 1 ? 'flipped' : '')}>
                <div className={"card__inner " + (cardnum === 1 ? 'is-flipped' : '')} onClick={(e) => cardflip(1)}>
                    <div className="card__face card__face--front">
                        <h2>Weather Reporter</h2>
                    </div>
                    <div className="card__face card__face--back">
                        <div className="card__content">
                            <div className="card__header">
                                <img src="1.PNG" alt="" className="pp" />
                            </div>
                            <div className="card__body">
                                <h3>Weather Reporter&nbsp;&nbsp;&nbsp;<a href="https://openweathermap.org/" target="_blank" rel="noreferrer"><button className="btn-weatherReport"><i className="fas fa-external-link-alt"></i></button></a></h3>
                                <p>This is a fully responsive web app made with HTML, SASS and vanilla JS. It is made to display weather information about 100 cities of Canada. It uses AJAX request to retrieve XML document from OpenWeatherAPI. It is also using cookies to display the last selected city when the app is opened again.</p>
                                <h4>Tech used:</h4>
                                <div>
                                    <span className="myButton">HTML</span>&nbsp;
                                    <span className="myButton">SASS</span>&nbsp;
                                    <span className="myButton">JQuery</span>&nbsp;
                                    <span className="myButton">Spin.js</span>&nbsp;
                                    <span className="myButton">JavaScript</span>&nbsp;
                                    <span className="myButton">AJAX</span>&nbsp;
                                    <span className="myButton">XML</span>&nbsp;
                                    <span className="myButton">API</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"card " + (cardnum === 2 ? 'flipped' : '')}>
                <div className={"card__inner " + (cardnum === 2 ? 'is-flipped' : '')} onClick={(e) => cardflip(2)}>
                    <div className="card__face card__face--front">
                        <h2>NBA deck</h2>
                    </div>
                    <div className="card__face card__face--back">
                        <div className="card__content">
                            <div className="card__header">
                                <img src="nbaDeck.PNG" alt="" className="pp" />
                            </div>
                            <div className="card__body">
                                <h3>NBA Deck&nbsp;&nbsp;&nbsp;<a href="https://guri-sandhu.github.io/nbaDeck/" target="_blank" rel="noreferrer"><button className="btn-weatherReport"><i className="fas fa-external-link-alt"></i></button></a></h3>
                                <p>This is my passion project which is made using React.js to display NBA data. It is using NBA's Official API which can gained by reverse engineering the NBA website. It displays live scores, player details and team details. The UI is built using React Bootstrap. It is also using a reverse proxy server setup to bypass CORS error.</p>
                                <h4>Tech used:</h4>
                                <div>
                                    <span className="myButton">HTML</span>&nbsp;
                                    <span className="myButton">SASS</span>&nbsp;
                                    <span className="myButton">React.js</span>&nbsp;
                                    <span className="myButton">Spin.js</span>&nbsp;
                                    <span className="myButton">AJAX</span>&nbsp;
                                    <span className="myButton">JSON</span>&nbsp;
                                    <span className="myButton">API</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"card " + (cardnum === 3 ? 'flipped' : '')}>
                <div className={"card__inner " + (cardnum === 3 ? 'is-flipped' : '')} onClick={(e) => cardflip(3)}>
                    <div className="card__face card__face--front">
                        <h2>LaunchPad</h2>
                    </div>
                    <div className="card__face card__face--back">
                        <div className="card__content">
                            <div className="card__header">
                                <img src="launchpad.PNG" alt="" className="pp" />
                            </div>
                            <div className="card__body">
                                <h3>LaunchPad&nbsp;&nbsp;&nbsp;<a href="https://guri-sandhu.github.io/nbaDeck/" target="_blank" rel="noreferrer"><button className="btn-weatherReport"><i className="fas fa-external-link-alt"></i></button></a></h3>
                                <p>This project is created using ASP .NET Core. It is a server side website. It can be used as a home page which contains website links that a person regularly uses. The website also has a administration end which can be used to edit links etc. It uses MySql to store data regarding the website. The CRUD functionality was achieved using Entity Framework.</p>
                                <h4>Tech used:</h4>
                                <div>
                                    <span className="myButton">MVC pattern</span>&nbsp;
                                    <span className="myButton">C#</span>&nbsp;
                                    <span className="myButton">JavaScript</span>&nbsp;
                                    <span className="myButton">MySql</span>&nbsp;
                                    <span className="myButton">CSS</span>&nbsp;
                                    <span className="myButton">HTML</span>&nbsp;
                                    <span className="myButton">Entity Framework</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"card " + (cardnum === 4 ? 'flipped' : '')}>
                <div className={"card__inner " + (cardnum === 4 ? 'is-flipped' : '')} onClick={(e) => cardflip(4)}>
                    <div className="card__face card__face--front">
                        <h2>Tech Roster</h2>
                    </div>
                    <div className="card__face card__face--back">
                        <div className="card__content">
                            <div className="card__header">
                                <img src="techRoster.PNG" alt="" className="pp" />
                            </div>
                            <div className="card__body">
                                <h3>Tech Roster&nbsp;&nbsp;&nbsp;<a href="https://guri-sandhu.github.io/nbaDeck/" target="_blank" rel="noreferrer"><button className="btn-weatherReport"><i className="fas fa-external-link-alt"></i></button></a></h3>
                                <p>This is a full stack Web App created using MERN stack. The web app is made to showcase CRUD functions where the technologies and courses are also dependent on each other. The challenge in this app was to keep data consistent as non relational database was used.</p>
                                <h4>Tech used:</h4>
                                <div>
                                    <span className="myButton">React.js</span>&nbsp;
                                    <span className="myButton">Express</span>&nbsp;
                                    <span className="myButton">Node.js</span>&nbsp;
                                    <span className="myButton">MongoDB</span>&nbsp;
                                    <span className="myButton">SaSS</span>&nbsp;
                                    <span className="myButton">HTML</span>&nbsp;
                                    <span className="myButton">RestfulAPI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    );
}

export default Projects;