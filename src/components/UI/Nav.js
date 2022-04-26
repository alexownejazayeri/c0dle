import React from "react";

import './Nav.css';

const Nav = (props) => {
  return (
    <div className="nav">
      <div className="nav-icons1">
        {/* Hamburger Menu SVG */}
        <button className="btn" onClick={props.onBobby}>
          <svg
            width="24"
            height="17"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 15.3C0 14.3611 0.761116 13.6 1.7 13.6H22.3C23.2389 13.6 24 14.3611 24 15.3V15.3C24 16.2389 23.2389 17 22.3 17H1.7C0.761117 17 0 16.2389 0 15.3V15.3Z"
              fill="white"
            />
            <path
              d="M0 8.50002C0 7.56113 0.761116 6.80002 1.7 6.80002H22.3C23.2389 6.80002 24 7.56113 24 8.50002V8.50002C24 9.4389 23.2389 10.2 22.3 10.2H1.7C0.761117 10.2 0 9.4389 0 8.50002V8.50002Z"
              fill="white"
            />
            <path
              d="M0 1.7C0 0.761116 0.761116 0 1.7 0H22.3C23.2389 0 24 0.761116 24 1.7V1.7C24 2.63888 23.2389 3.4 22.3 3.4H1.7C0.761117 3.4 0 2.63888 0 1.7V1.7Z"
              fill="white"
            />
          </svg>
        </button>
        {/*Info Icon*/}
        <button className="btn" onClick={props.onClickHelp}>
          <svg
            width="24"
            height="28"
            viewBox="0 0 24 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="15" r="11" stroke="white" strokeWidth="2" />
            <path
              d="M12.0211 19.256C11.4451 19.256 11.1571 18.968 11.1571 18.392C11.1571 17.608 11.2851 16.952 11.5411 16.424C11.7971 15.896 12.0931 15.496 12.4291 15.224C12.7651 14.936 13.1891 14.64 13.7011 14.336C14.1491 14.064 14.4771 13.84 14.6851 13.664C14.9091 13.472 15.0851 13.232 15.2131 12.944C15.3411 12.64 15.4051 12.24 15.4051 11.744C15.4051 10.752 15.2211 10.08 14.8531 9.728C14.5011 9.36 13.8291 9.176 12.8371 9.176H11.2291C10.2531 9.176 9.58113 9.36 9.21313 9.728C8.84513 10.096 8.66113 10.768 8.66113 11.744C8.66113 12.32 8.37313 12.608 7.79713 12.608C7.22113 12.608 6.93313 12.32 6.93313 11.744C6.93313 10.288 7.28513 9.208 7.98913 8.504C8.69313 7.8 9.77313 7.448 11.2291 7.448H12.8371C14.3091 7.448 15.3891 7.8 16.0771 8.504C16.7811 9.192 17.1331 10.272 17.1331 11.744C17.1331 12.528 17.0051 13.184 16.7491 13.712C16.4931 14.24 16.1971 14.648 15.8611 14.936C15.5251 15.208 15.1011 15.496 14.5891 15.8C14.1411 16.072 13.8051 16.304 13.5811 16.496C13.3731 16.672 13.2051 16.912 13.0771 17.216C12.9491 17.504 12.8851 17.896 12.8851 18.392C12.8851 18.968 12.5971 19.256 12.0211 19.256ZM11.7811 23C11.5091 23 11.2931 22.928 11.1331 22.784C10.9891 22.624 10.9171 22.408 10.9171 22.136V21.584C10.9171 21.024 11.2051 20.744 11.7811 20.744H12.3091C12.8531 20.744 13.1251 21.024 13.1251 21.584V22.136C13.1251 22.408 13.0531 22.624 12.9091 22.784C12.7651 22.928 12.5651 23 12.3091 23H11.7811Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
         <h3>CODE-LE</h3>
      <div className="nav-icons2">
        {/*Stats Icon*/}
        <button className="btn" onClick={props.onClickStats}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="16.4545"
              y="11"
              width="6.72727"
              height="12"
              stroke="#FFFEFE"
              strokeWidth="2"
            />
            <path d="M1 7H7.72727V23H1V7Z" stroke="#FFFEFE" strokeWidth="2" />
            <rect
              x="8.72726"
              y="1"
              width="6.72727"
              height="22"
              stroke="#FFFEFE"
              strokeWidth="2"
            />
          </svg>
        </button>
        {/*Settings Cog*/}
        <button className="btn" onClick={props.onClickSettings}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6391 2.6674C14.3085 4.73757 16.4799 5.97787 18.6311 5.51293C20.7527 5.05438 22.2375 7.56336 20.7697 9.12664C19.2813 10.7117 19.2966 13.1665 20.7996 14.7672C22.2423 16.3038 20.8233 18.843 18.6342 18.3699C16.4808 17.9044 14.3052 19.1298 13.6416 21.182C12.9671 23.2682 10.0035 23.1975 9.36094 21.2102C8.69154 19.14 6.5201 17.8997 4.36889 18.3646C2.24727 18.8232 0.762489 16.3142 2.23034 14.7509C3.71867 13.1658 3.7034 10.711 2.20045 9.11038C0.757654 7.57379 2.17666 5.03457 4.36575 5.5077C6.51924 5.97313 8.69479 4.74772 9.35838 2.69553C10.0329 0.609402 12.9965 0.680094 13.6391 2.6674Z"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M14.4262 11.9389C14.4262 13.4788 13.1396 14.7691 11.5002 14.7691C9.86083 14.7691 8.57425 13.4788 8.57425 11.9389C8.57425 10.3989 9.86083 9.10867 11.5002 9.10867C13.1396 9.10867 14.4262 10.3989 14.4262 11.9389Z"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Nav;