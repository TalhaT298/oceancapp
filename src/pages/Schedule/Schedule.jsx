import React from "react";
import { Link } from "react-router-dom";
// import { PopupButton } from "react-calendly";
const Schedule = () => {
  return (
    <div>
      <Link to="/sched"></Link>
      {/* <PopupButton
                url="https://calendly.com/tariquetalha6/oceancapp"
                
                rootElement={document.getElementById("root")}
                text="Click here to schedule!"
                textColor="#ffffff"
                color="#00a2ff
            /> */}
      <div >
        <iframe
          src="https://calendly.com/oceancapp/30min"
          width="100%"
          height="600"
          frameborder="0"
          id="calendlyFrame"
        ></iframe>
      </div>
    </div>
  );
};

export default Schedule;