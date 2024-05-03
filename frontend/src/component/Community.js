import React from "react";
          import { App as SendbirdApp } from "sendbird-uikit";
          import "sendbird-uikit/dist/index.css";
          
          const APP_ID = "704124EF-DF6C-4C5A-B4EC-389BE381B007"
          const USER_ID = "u1"
          
          const styles = {
            height: '100vh',
            width: '98vw',
            paddingLeft: '2rem'
          };

          export default function Community() {
            return (
              <div className="App" style={styles}>
          			<SendbirdApp appId={APP_ID} 
                     userId={USER_ID}
                    />
              </div>
            );
          }
          