import React from "react";
          import { App as SendbirdApp } from "sendbird-uikit";
          import "sendbird-uikit/dist/index.css";

          const APP_ID = "704124EF-DF6C-4C5A-B4EC-389BE381B007"
          const USER_ID = localStorage.getItem("userName");
          const dob= localStorage.getItem("birthDate")
          const birthDate = new Date(dob);
          const currentDate = new Date();
          const timeDiff = currentDate.getTime() - birthDate.getTime();
          const age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
          const ageString=age.toString();
          
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
          