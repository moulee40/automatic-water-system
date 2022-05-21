import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import Alert from "@mui/material/Alert";
import { withRouter } from "react-router";
import axios from "axios";

const eventBaseUrl = "https://7m7h3lrybf.execute-api.us-east-2.amazonaws.com/dev/login";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      shouldAlertDisplay: false,
      shouldLoginErrorDisplay:false,
      signInErrorMessage:""
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    const {
      history: { push },
    } = this.props;
    if (username === "" || password === "") {
      this.setState({ shouldAlertDisplay: true });
      return;
    }
    if (username === "admin" && password === "admin") {
      push({
        pathname: "/home",
      });
      localStorage.setItem("role","admin")
      return;
    }
    // else if(username === "sharma" && password === "sharma"){
    //   push({
    //     pathname: "/home",
    //   });
    //   localStorage.setItem("role","user")
    // }
    // else if(username === "bala" && password === "bala"){
    //   push({
    //     pathname: "/home",
    //   });
    //   localStorage.setItem("role","guest")
    // }else{
    //   this.setState({shouldLoginErrorDisplay: true})
    //   return;
    // }
    
    const reqJson={
      username:username,password:password
    }
    axios.post(eventBaseUrl,reqJson).then((res) => {
     if(res.data.status==="SUCCESS")
     {
      if(res.data.isPartner){
        localStorage.setItem("role","user")
      }
      else{
        localStorage.setItem("role","guest")
      }
      localStorage.setItem("userId",res.data.userId)
      localStorage.setItem("password",password)
      push({
        pathname: "/home",
      });
     }
     else{
      this.setState({shouldLoginErrorDisplay: true,signInErrorMessage:res.data.errorMessage})
     }
     
    });

  };

  render() {
    const { username, password, shouldAlertDisplay,shouldLoginErrorDisplay,signInErrorMessage} = this.state;
    const {type} = this.props;
    const isAdmin = type === 'Admin';
    return (
      <div className={`flex flex-col space-y-5 max-w-md mx-auto my-16 w-1/2 px-8 py-16 shadow-2xl`}>
        <div className="flex items-center justify-center pb-8">
          <h2 id="title" className={`text-4xl font-semibold `}>LOGIN</h2>
        </div>
        <TextField
          value={username}
          required
          style={{backgroundColor:'#fff',borderRadius:'5px'}}
          id="outlined-required"
          placeholder="User Name"
          onChange={(e) => this.handleUsernameChange(e)}
        />
        <TextField
          id="outlined-password-input"
          required
          style={{backgroundColor:'#fff',borderRadius:'5px'}}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => this.handlePasswordChange(e)}
        />
        <Button variant="contained" onClick={this.handleLogin} style={{backgroundColor:'#017781'}}>
          Login
        </Button>
        <Link id="title"
              to={isAdmin ? "/signup": "/signup"}
              className={`font-semibold text-lg px-1 underline`}
            >
              Sign up
            </Link>
        {shouldAlertDisplay && (
          <Alert severity="error">Field cannot be empty</Alert>
        )}
        {shouldLoginErrorDisplay && (
          <Alert severity="error"> {signInErrorMessage} </Alert>
        )}
      </div>
    );
  }
}

export default withRouter(Login);
