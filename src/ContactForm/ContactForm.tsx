import React from 'react';
import { useMediaQuery } from 'react-responsive';
// Importing Components
import "./ContactForm.scss";
import MapContact from "./MapContact";
import SmallMap from "./SmallMap";

// This is the contact page component
// It also uses mapbox to display the location
const ContactForm = ():JSX.Element => {

    // Using this package to check screen size
    const isMobileorTab = useMediaQuery({
        query: '(max-device-width: 960px)'
    })

    return (
        <div className="contact">
            <div className="contact__leftSide">
                <form className="form">
                    <h2 className="formHeading">CONTACT ME</h2>
                    <p>Name:<input placeholder="Write your name here.."></input></p>
                    <p>Email:<input placeholder="Let me know how to contact you back.."></input></p>
                    <p>Message:<input placeholder="What would you like to tell me.."></input></p>
                    <button className="sendForm">Send Message</button>
                </form>
            </div>

            <div className="contact__rightSide">
                <div className="contact__rightSide--upper">
                    {isMobileorTab ?
                        <SmallMap />
                    :
                    <MapContact />
                    }
                    
                </div>
                <div className="contact__rightSide--lower">
                    <div className="detailsHeading"><span className="fa fa-phone"></span>Let's Talk</div>
                    <div className="details">+1 (647)-936-4784</div>
                    <div className="detailsHeading"><span className="fa fa-envelope-o"></span>Email Me</div>
                    <div className="details">gurnihal97@gmail.com</div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;