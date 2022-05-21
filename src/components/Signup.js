import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import Alert from "@mui/material/Alert";
import { withRouter } from "react-router";
import axios from "axios";

const eventBaseUrl = "https://o0qudsxt1l.execute-api.us-east-2.amazonaws.com/dev/signup";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeId:"",
      username: "",
      email: "",
      phone: "",
      password: "",
      shouldAlertDisplay: false,
      shouldErrorMessageDisplay: false,
      signupErrorMessage:""

    };
  }

  handleEmployeeIdChange = (e) => {
    this.setState({ employeeId: e.target.value });
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = () => {
    const { employeeId,username, email, phone, password } = this.state;
    const {
      history: { push },
    } = this.props;
    if (
      employeeId ==="" ||
      username === "" ||
      email === "" ||
      phone === "" ||
      password === ""
    ) {
      this.setState({ shouldAlertDisplay: true });
      return;
    }
    const reqJson={
     employeeId:employeeId,
     username:username,
     password:password,
     email:email,
     phone:phone,
     "isPartner": false
    }
    axios.post(eventBaseUrl,reqJson).then((res) => {
      if(res.data.status==="SUCCESS")
      {
        push('/');
      }else{
        this.setState({
          signupErrorMessage:res.data.errorMessage,
          shouldErrorMessageDisplay:true
         }) 
      }
    });
  };

  render() {
    const {employeeId, username, email, phone, password, shouldAlertDisplay,shouldErrorMessageDisplay,signupErrorMessage } =
      this.state;
     
      
    return (
     
      <div className="flex flex-col">
      {/* <div className="flex justify-center p-4 text-5xl text-white bg-blue-500 shadow-md font-medium ">Water Plant Monitor System</div> */}
      <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      <div className={`flex flex-col space-y-5 max-w-md mx-auto my-16 w-1/2  px-8 py-16 shadow-2xl`}>
      <div className="flex items-center justify-center pb-8">
        <h2 id="title" className={`text-4xl font-semibold`}>SIGNUP</h2>
      </div>
        <TextField
          required
          id="outlined-username"
          style={{backgroundColor:'#fff',borderRadius:'5px'}}
          value={employeeId}
          placeholder="Employee ID"
          autoComplete="off"
          onChange={(e) => this.handleEmployeeIdChange(e)}
        />
        <TextField
          required
          id="outlined-email"
          style={{backgroundColor:'#fff',borderRadius:'5px'}}
          value={username}
          placeholder="User Name"
          onChange={(e) => this.handleUsernameChange(e)}
        />
        <TextField
          value={password}
          required
          id="outlined-password-input"
          style={{backgroundColor:'#fff',borderRadius:'5px'}}
          placeholder="Password"
          type="password"
          onChange={(e) => this.handlePasswordChange(e)}
        />
        <TextField
          required
          id="outlined-phone"
          style={{backgroundColor:'#fff',borderRadius:'5px'}}
          value={phone}
          placeholder="Phone Number"
          onChange={(e) => this.handlePhoneChange(e)}
        />
        <TextField
          required
          id="outlined-phone"
          style={{backgroundColor:'#fff',borderRadius:'5px'}}
          value={email}
          placeholder="Email ID"
          onChange={(e) => this.handleEmailChange(e)}
        />
        
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Button variant="contained" style={{backgroundColor:'#017781'}} onClick={this.handleSubmit}>
            Submit
          </Button>
          <div style={{display:'flex'}}>
            <p className="text-lg text-white">Existing User?</p>
            <Link id="title" to="/" className="text-blue-500 font-semibold text-lg px-1">
              Login
            </Link>
          </div>
        </div>
        {shouldAlertDisplay &&
          <Alert severity="error">Field cannot be empty</Alert>
        }
         {shouldErrorMessageDisplay &&
          <Alert severity="error"> {signupErrorMessage} </Alert>
        }
        
      </div>
      </div>


     
     
    );
  }
}

export default withRouter(Signup);
