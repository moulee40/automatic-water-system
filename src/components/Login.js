import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import Alert from "@mui/material/Alert";
import { withRouter } from "react-router";
import axios from "axios";

const eventBaseUrl = "http://localhost:8080/user/login";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      shouldAlertDisplay: false,
      shouldLoginErrorDisplay:false
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = () => {
    // const { username, password } = this.state;
    const {
      history: { push },
    } = this.props;
    // if (username === "" || password === "") {
    //   this.setState({ shouldAlertDisplay: true });
    //   return;
    // }
    // this.setState({ shouldAlertDisplay: false });
    // this.setState({ shouldLoginErrorDisplay: false });
    // const reqJson={
    //   username:username,password:password
    // }
    // axios.post(eventBaseUrl,reqJson).then((res) => {
    //  if(res.data)
    //  {
    //    localStorage.setItem("username",username)
    //   push({
    //     pathname: "/home",
    //     username: username, 
    //   });
    //  }
    //  if(!res.data){
    //    this.setState({shouldLoginErrorDisplay: true})
    //  }
    // });

    push({
      pathname: "/home",
      // username: username, 
    });
  };

  render() {
    const { username, password, shouldAlertDisplay,shouldLoginErrorDisplay } = this.state;
    const {type} = this.props;
    const isAdmin = type === 'Admin';
    return (
      <div className={`flex flex-col space-y-5 max-w-md mx-auto my-16 w-1/2 ${isAdmin ? 'bg-blue-500':''} px-8 py-16 shadow-2xl`}>
        <div className="flex items-center justify-center pb-8">
          <h2 className={`text-4xl font-semibold ${isAdmin ? 'text-white':'text-blue-500'}`}>Login</h2>
        </div>
        <TextField
          value={username}
          required
          style={{backgroundColor:'#fff'}}
          id="outlined-required"
          label="Username"
          onChange={(e) => this.handleUsernameChange(e)}
        />
        <TextField
          id="outlined-password-input"
          required
          style={{backgroundColor:'#fff'}}
          label="Password"
          type="password"
          value={password}
          onChange={(e) => this.handlePasswordChange(e)}
        />
        <Button variant="contained" onClick={this.handleLogin} style={isAdmin?{backgroundColor:'#fff',color:'#2b82f6'}:{backgroundColor:'#2b82f6'}}>
          Login
        </Button>
        <Link
              to={isAdmin ? "/signup": "/signup"}
              className={`${isAdmin ? 'text-white ':'text-blue-500'} font-semibold text-lg px-1 underline`}
            >
              Sign up
            </Link>
        {shouldAlertDisplay && (
          <Alert severity="error">Field cannot be empty</Alert>
        )}
        {shouldLoginErrorDisplay && (
          <Alert severity="error">Invalid username or password</Alert>
        )}
      </div>
    );
  }
}

export default withRouter(Login);
