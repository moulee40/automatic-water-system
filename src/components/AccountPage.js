import React from "react";
import { withRouter } from "react-router";
import Sidebar from "./Sidebar";
import MotorCard from "./MotorCard";
import { DataGrid } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Alert from "@mui/material/Alert";

const eventBaseUrl = "https://o1b2elozsb.execute-api.us-east-2.amazonaws.com/dev/details/";
class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog : false,
      dataList:[],
      role:localStorage.getItem("role"),
      employeeId:"",
      username: "",
      email: "",
      phone: "",
      password: localStorage.getItem("password"),
      isPartner:false,
      shouldAlertDisplay: false,
      shouldErrorMessageDisplay: false,
      signupErrorMessage:""
    };
  }

  componentWillMount() {
    this.loadUserDeatil();
  }

  loadUserDeatil =()=>{
    const userId =  localStorage.getItem("userId");
    axios.get(eventBaseUrl+userId).then((res) => {
     this.setState({
       employeeId:res.data.employeeId,
       username:res.data.username,
       email:res.data.email,
       phone:res.data.phone,
       isPartner:res.data.isPartner
     })
    });
  }

  handleLogout = () => {
    // localStorage.removeItem("username");
    const {
      history: { push },
    } = this.props;
    push("/");
  };

  handleEmployeeIdChange = (e) => {
    this.setState({ employeeId: e.target.value });
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value ,shouldErrorMessageDisplay:false,shouldAlertDisplay:false });
  };

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value,shouldErrorMessageDisplay:false,shouldAlertDisplay:false });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value,shouldErrorMessageDisplay:false,shouldAlertDisplay:false });
  };

  handleSubmit = () => {
    const { employeeId,username, email, phone, password,isPartner } = this.state;
    const {
      history: { push },
    } = this.props;
    if (
      email === "" ||
      phone === "" || password===""
    ) {
      this.setState({ shouldAlertDisplay: true });
      return;
    }
    const userId=localStorage.getItem("userId");
    const reqJson={
     userId:userId,
     username:username,
     password:password,
     email:email,
     phone:phone,
     isPartner:isPartner
    }
    axios.put(eventBaseUrl+userId,reqJson).then((res) => {
      if(res.data.status==="SUCCESS")
      {
        alert("Successfully Updated");
        this.loadUserDeatil();
      }else{
        this.setState({
          signupErrorMessage:res.data.errorMessage,
          shouldErrorMessageDisplay:true
         }) 
      }
    });
  };
  
  

  render() {
    const {employeeId, username,password, email, phone, shouldAlertDisplay,shouldErrorMessageDisplay,signupErrorMessage } =
    this.state;
   
   return(
    <div className="space-y-5 h-screen flex">
       
    <Sidebar />
    <div className={`flex flex-col space-y-5 max-w-md mx-auto my-16 w-1/2  px-8 py-16 `}>
      <div className="flex items-center pb-4">
        <h3 className={`text-4xl font-semibold`}>User Details</h3>
      </div>
        <TextField
          
          id="outlined-username"
          value={employeeId}
          label="Employee ID"
          autoComplete="off"
          disabled
          // onChange={(e) => this.handleEmployeeIdChange(e)}
        />
        <TextField
          
          id="outlined-email"
          value={username}
          label="User Name"
          disabled
          // onChange={(e) => this.handleUsernameChange(e)}
        />
        <TextField
          value={password}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          placeholder="********"
          onChange={(e) => this.handlePasswordChange(e)}
        />
        <TextField
          required
          id="outlined-phone"
          value={phone}
          label="Phone Number"
          onChange={(e) => this.handlePhoneChange(e)}
        />
        <TextField
          required
          id="outlined-phone"
          value={email}
          label="Email ID"
          onChange={(e) => this.handleEmailChange(e)}
        />
        
        <div className="flex items-center" style={{justifyContent:'flex-end'}}>
          <Button variant="contained" style={{backgroundColor:'#2b82f6'}} onClick={this.handleSubmit}>
            Update
          </Button>
          
        </div>
        {shouldAlertDisplay &&
          <Alert severity="error">Field cannot be empty</Alert>
        }
         {shouldErrorMessageDisplay &&
          <Alert severity="error"> {signupErrorMessage} </Alert> 
        } 
            </div>
            </div>
   )
    
  }
}

export default withRouter(AccountPage);
