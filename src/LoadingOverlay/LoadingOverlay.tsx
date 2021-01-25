import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './LoadingOverlay.scss';

// The parameter datatypes
interface LoadingOverlayProps {
    enabled:boolean;
    bgColor:string;
    spinnerColor:string;
    setLoading: Function;
}

// The LoadingOverlay component
const LoadingOverlay = ({enabled, bgColor, spinnerColor, setLoading}:LoadingOverlayProps):JSX.Element => {

    let styles:Object = {
        backgroundColor:bgColor
    }

    // React.useEffect(() => {
    //     setInterval(() => setLoading(false), 2000);
    // }, [setLoading]);

    return (
        (enabled)
        ? 
        <div className="loading-overlay" style={styles}>
            <img src="logogs.svg" alt="dsf" height="152px" width="142px"></img>
            <div className="workDiv">Working On it...</div>
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