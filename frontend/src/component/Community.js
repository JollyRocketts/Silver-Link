import React from "react";
          import { App as SendbirdApp } from "sendbird-uikit";
          import "sendbird-uikit/dist/index.css";

          const APP_ID = "704124EF-DF6C-4C5A-B4EC-389BE381B007"
          const USER_ID = localStorage.getItem("userName");
          const dob= localStorage.getItem("dob")
          const birthDate = new Date(dob);
const currentDate = new Date();

// Calculate the difference in milliseconds between the current date and the date of birth
const timeDiff = currentDate.getTime() - birthDate.getTime();

// Calculate the age in years
const age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

// Convert the age to a string if needed
const ageString = age.toString();

          
          const styles = {
            height: '100vh',
            width: '98vw',
            paddingLeft: '2rem'
          };
          export default function Community() {
            return (
              <div className="App" style={styles}>
          			<SendbirdApp appId={APP_ID} 
                     userId={ageString}
                     nickname={USER_ID}
                    />
              </div>
            );
          }
          