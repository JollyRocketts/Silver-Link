import React from "react";
import { App as SendbirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

const APP_ID = "704124EF-DF6C-4C5A-B4EC-389BE381B007";
const USER_ID = localStorage.getItem("userName");
const dob = localStorage.getItem("dob");
const datePart = dob ? dob.slice(0, 10) : ""; // Check if dob is not null before calling slice
const ageString = datePart.toString();
const styles = {
  height: '100vh',
  width: '98vw',
  paddingLeft: '2rem'
};

export default function Community() {
  return (
    <div className="App" style={styles}>
      <SendbirdApp 
        appId={APP_ID} 
        userId={ageString}
        nickname={USER_ID}
      />
    </div>
  );
}
