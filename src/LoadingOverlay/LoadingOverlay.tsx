import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './LoadingOverlay.scss';

interface LoadingOverlayProps {
    enabled:boolean;
    bgColor:string;
    spinnerColor:string;
}

const LoadingOverlay = ({enabled, bgColor, spinnerColor}:LoadingOverlayProps):JSX.Element => {

    let styles:Object = {
        backgroundColor:bgColor
    }

    return (
        (enabled)
        ? 
        <div className="loading-overlay" style={styles}>
            <img src="logogs.svg" alt="dsf" height="152px" width="142px"></img>
            <div className="containerStyles">
            <div className="fillerStyles">
                <span className="labelStyles" ></span>
            </div>
            </div>
        </div>
        : <div></div>
    );
}

export default LoadingOverlay;