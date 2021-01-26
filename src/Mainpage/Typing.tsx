import React from "react";
import Typewriter from "typewriter-effect";

const Typing = ():JSX.Element => {
  return (
    <div>
        <Typewriter
        options={{
            strings: [
            "Developer.",
            "MERN Stack Developer.",
            "NSCC Student.",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }}
        />
    </div>
  );
}

export default Typing;