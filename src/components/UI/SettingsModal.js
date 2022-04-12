import React from "react";
import "./SettingsModal.css";

const SettingsModal = (props) => {
  return (
    <div className="settings-overlay" onClick={props.onClick}>
      <div className="settings-modal">
        <h1>SETTINGS</h1>
        <div className="close-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.1727 18.1726C17.5088 18.8365 16.4324 18.8365 15.7685 18.1726L1.2021 3.60625C0.53821 2.94235 0.538209 1.86597 1.2021 1.20208V1.20208C1.86599 0.538191 2.94237 0.538191 3.60626 1.20208L18.1727 15.7685C18.8366 16.4324 18.8366 17.5088 18.1727 18.1726V18.1726Z"
              fill="white"
            />
            <path
              d="M1.20208 18.1726C0.53819 17.5087 0.53819 16.4324 1.20208 15.7685L15.7685 1.20207C16.4324 0.53818 17.5088 0.538179 18.1726 1.20207V1.20207C18.8365 1.86596 18.8365 2.94234 18.1726 3.60623L3.60625 18.1726C2.94235 18.8365 1.86597 18.8365 1.20208 18.1726V18.1726Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="setting">
          <h3>LEAVE FEEDBACK</h3>
          <a href="mailto: alex@growthmedium.io" target="_blank" rel="noreferrer">
            EMAIL
          </a>
        </div>
        <hr></hr>
        <br></br>
        <div className="setting">
          <h3>PORTFOLIO</h3>
          <a href="https://alxo.io/" target="_blank" rel="noreferrer">
            ALXO.IO
          </a>
        </div>
        <hr></hr>
        <br></br>
        <div className="setting">
          <h3>GITHUB</h3>
          <a href="https://github.com/alexownejazayeri" target="_blank" rel="noreferrer">
            GIT OUTTA HERE
          </a>
        </div>
        <hr></hr>
        <br></br>
        <div className="setting">
          <h3>TWITTER</h3>
          <a href="https://twitter.com/alexjazayeri" target="_blank" rel="noreferrer">
            TWEET ME NICE
          </a>
        </div>
        <hr></hr>
        <br></br>
      </div>
    </div>
  );
};

export default SettingsModal;
