import React from 'react';
import { useMediaQuery } from 'react-responsive';
// Importing Components
import "./ContactForm.scss";
import MapContact from "./MapContact";
import SmallMap from "./SmallMap";
import {contactPageProps} from "./../Tools/data.model"

import {sendJSONData} from "./../Tools/Toolkit";

const SUBMIT_SCRIPT:string = "https://still-refuge-22594.herokuapp.com/post";

// This is the contact page component
// It also uses mapbox to display the location
const ContactForm = ({setLoading}:contactPageProps):JSX.Element => {

    // let history = useHistory();

    // // isolate the route parameter and store in id variable
    // let { id } = useParams<{id:string}>();

    // Using this package to check screen size
    const isMobileorTab = useMediaQuery({
        query: '(max-device-width: 960px)'
    })

    function onSubmitClick(e:any):void {
        console.log(senderName);
        console.log(senderEmail);
        console.log(senderMessage);
        e.preventDefault();
    
        if(senderName !== "" && senderMessage !== "" && senderEmail !== "") {
                setShowError(false);
    
                let sendfile:any = {
                    "name": senderName,
                    "email": senderEmail,
                    "message": senderMessage
                }
    
                console.log(sendfile);
                let sendString:string = JSON.stringify(sendfile);
                setLoading(true);
                sendJSONData(SUBMIT_SCRIPT, sendString, onsubResponse, onError, "POST");
                console.log("sending successful");
                //loadingOverlayinDiv.style.display = "block";
        } else {
            console.log("Please fill all fields");
            setShowError(true);
        }
    }

    function onsubResponse(responseText:string):void {
        // console.log("This is" + responseText);
        setLoading(false);
        setSenderName("");
        setSenderEmail("");
        setSenderMessage("");
        setSuccessMessage(true);
        // history.push('/contact/2');

    }

    function onError(message:string):void {
        console.log("*** Error has occured during AJAX data transmission: " + message);
    }

    // React.useEffect(():void => {
    //     if (id === "1") {
    //         console.log("normal load");
    //         // setParamID(1);
    //     } else {
    //         setSuccessMessage(true);
    //     }
    //   }, [id]);

    const [senderName, setSenderName] = React.useState<string>("");
    const [senderEmail, setSenderEmail] = React.useState<string>("");
    const [senderMessage, setSenderMessage] = React.useState<string>("");
    const [showError, setShowError] = React.useState<boolean>(false);
    const [successMessage, setSuccessMessage] = React.useState<boolean>(false);
    // const [paramID, setParamID] = React.useState<number>(0);

    return (
        <div className="contact">
            <div className="contact__leftSide">
                <form className="form">
                    <h2 className="formHeading">CONTACT ME</h2>
                    <label className="form__successlbl" id="successTxt" style={{display: (successMessage ? 'block' : 'none')}}>"Message Sent successfully"</label>
                    <p>Name:<input placeholder="Write your name here.." value={senderName} onChange={e => setSenderName(e.target.value)}></input></p>
                    <p>Email:<input placeholder="Let me know how to contact you back.." value={senderEmail} onChange={e => setSenderEmail(e.target.value)}></input></p>
                    <p>Message:<input placeholder="What would you like to tell me.." value={senderMessage} onChange={e => setSenderMessage(e.target.value)}></input></p>
                    <label className="form__errorlbl" id="errorTxt" style={{display: (showError ? 'block' : 'none')}}>"Error: Please check your fields"</label>
                    <button className="sendForm" onClick={e => onSubmitClick(e)}>Send Message</button>
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