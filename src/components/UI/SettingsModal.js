import React from "react";
import "./SettingsModal.css";

const SettingsModal = (props) => {
  return (
    <div className="settings-overlay" onClick={props.onClick}>
      <div className="settings-modal">
        <h1>SETTINGS</h1>
        <div className="setting">
            <h3>LEAVE FEEDBACK</h3>
            <a href="mailto: alex@growthmedium.io" target="_blank">EMAIL</a>
        </div>
        <hr></hr>
        <br></br>
        <div className="setting">
            <h3>PORTFOLIO</h3>
            <a href="https://alxo.io/" target="_blank">ALXO.IO</a>
        </div>
        <hr></hr>
        <br></br>
        <div className="setting">
            <h3>GITHUB</h3>
            <a href="https://github.com/alexownejazayeri" target="_blank">GIT OUTTA HERE</a>
        </div>
        <hr></hr>
        <br></br>
        <div className="setting">
            <h3>TWITTER</h3>
            <a href="https://twitter.com/alexjazayeri" target="_blank">TWEET ME NICE</a>
        </div>
        <hr></hr>
        <br></br>
      </div>
    </div>
  );
};

export default SettingsModal;
