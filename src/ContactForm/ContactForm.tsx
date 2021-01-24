import React from 'react';
import { useMediaQuery } from 'react-responsive';

import "./ContactForm.scss";
import MapContact from "./MapContact";
import SmallMap from "./SmallMap";

import {contactPageProps} from "./../Tools/data.model";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Jump component which is populated with image thumbnails which can be clicked on to go to a certain image
const ContactForm = ():JSX.Element => {

    const isMobileorTab = useMediaQuery({
        query: '(max-device-width: 960px)'
    })

    const [cardnum, setCardNum] = React.useState<number>(0);

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