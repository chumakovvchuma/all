import React from "react";
import ReactDOM from "react-dom";
import LogRocket from "logrocket";

import "./styles.css";
import { App } from "./App";
LogRocket.init("0xktwj/blog");
ReactDOM.render(<App />, document.getElementById("root"));
