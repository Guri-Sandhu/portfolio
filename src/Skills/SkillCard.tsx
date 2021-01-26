import React from 'react';
// Importing Components
import "./SkillCard.scss";

// The parameter datatypes
interface SkillCardProps {
    icon:string;
    name:string;
}

const SkillCard = ({icon,name}:SkillCardProps):JSX.Element => {



    return (
        <div className="skillcard">
            <i className={icon}></i>
            <div className="skillcard_title title-white">
                {name}
            </div>
        </div>
    );
}

export default SkillCard;