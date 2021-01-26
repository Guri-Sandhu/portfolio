import React from 'react';
// Importing Components
import "./Skills.scss";
import SkillCard from "./SkillCard";

// This is the contact page component
// It also uses mapbox to display the location
const Skills = ():JSX.Element => {

    return (
        <div className="skills">
            <div className="skills__frontend">
                <div className="skills__frontend--header">Frontend</div>
                <div className="skills__frontend--body">
                    <SkillCard icon={"devicon-html5-plain"} name={"html5"}/>
                    <SkillCard icon={"devicon-react-original"} name={"React.js"}/>
                    <SkillCard icon={"devicon-javascript-plain"} name={"JavaScript"}/>
                    <SkillCard icon={"devicon-bootstrap-plain"} name={"Bootstrap"}/>
                    <SkillCard icon={"devicon-babel-plain"} name={"Babel"}/>
                    <SkillCard icon={"devicon-jquery-plain"} name={"JQuery"}/>
                    <SkillCard icon={"devicon-materialui-plain"} name={"Material-UI"}/>
                    <SkillCard icon={"devicon-sass-original"} name={"Sass"}/>
                    <SkillCard icon={"devicon-typescript-plain"} name={"TypeScript"}/>

                </div>
            </div>

            {/* <div className="skills__separator">
                <img src="./greycenterline.gif"></img>
            </div> */}

            <div className="skills__backend">
                <div className="skills__backend--header">Backend</div>
                <div className="skills__backend--body">
                    <SkillCard icon={"devicon-nodejs-plain"} name={"nodejs"}/>
                    <SkillCard icon={"devicon-php-plain"} name={"php"}/>
                    <SkillCard icon={"devicon-csharp-plain"} name={"C#"}/>
                    <SkillCard icon={"devicon-dot-net-plain"} name={".NET Core"}/>
                    <SkillCard icon={"devicon-python-plain"} name={"Python"}/>
                    <SkillCard icon={"devicon-express-original"} name={"Express"}/>
                    <SkillCard icon={"devicon-mongodb-plain"} name={"MongoDB"}/>
                    <SkillCard icon={"devicon-mysql-plain"} name={"MySql"}/>
                    
                </div>
            </div>

            {/* <div className="skills__separator">
                <img src="./greycenterline.gif"></img>
            </div> */}

            <div className="skills__others">
                <div className="skills__others--header">Others</div>
                <div className="skills__others--body">
                    <SkillCard icon={"devicon-java-plain"} name={"Java"}/>
                    <SkillCard icon={"devicon-github-original"} name={"Github"}/>
                    <SkillCard icon={"devicon-illustrator-plain"} name={"illustrator"}/>
                    <SkillCard icon={"devicon-photoshop-plain"} name={"photoshop"}/>
                    <SkillCard icon={"devicon-linux-plain"} name={"linux"}/>
                    <SkillCard icon={"devicon-visualstudio-plain"} name={"visualstudio"}/>
                    <SkillCard icon={"devicon-wordpress-plain"} name={"wordpress"}/>
                    <SkillCard icon={"devicon-apache-plain"} name={"apache"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;