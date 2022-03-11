import React, { useState } from "react";
import ReactDOM from "react-dom";

import Game from "./components/Game/Game";
import Nav from "./components/Nav";
import Card from './components/UI/Card'

import "./index.css";

const App = () => {
    return (
        <Card >
          <Nav />
          <Game />
        </Card>
    );
}

// ================================================
ReactDOM.render(<App />, document.getElementById("root"));
