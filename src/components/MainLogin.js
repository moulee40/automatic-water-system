import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { withRouter } from "react-router";
import Login from "./Login";

class MainLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="flex flex-col">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
       {/* <div id='title' className="flex justify-center p-4 text-5xl font-medium ">
         <span>Water Plant Monitor System</span></div> */}
      <div className="flex mx-auto min-w-full">
          <Login type=""></Login>
      </div>
      </div>
    );
  }
}

export default withRouter(MainLogin);
