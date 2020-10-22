
import React, { Component } from "react";
import './../../assets/styles/login.css'
import TextField from '@material-ui/core/TextField'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';


class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-name-div">
          <ExitToAppIcon className="appIcon" fontSize="large"/>
          <h1>Login</h1>
        </div>
        <div className="signUpNow-div">Don't have an account?Sign up now!</div>
        <div className="login-div">
          <form className="form-div">

            <TextField
              variant="standard"
              placeholder="Email"
              margin="normal"
              required
              InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon/>
                </InputAdornment>
              ),
            }}
              // onChange={this.setUsername}
              // value={this.state.username}
            />
            <TextField
              variant="standard"
              placeholder="Password"
              margin="normal"
              required
              type="password"
              InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon/>
                </InputAdornment>
              ),
            }}
              // onChange={this.setPassword}
              // value={this.state.password}
            />

            <div className="toggle-div">
              <label class="switch">
                <input type="checkbox" checked/>
                <span class="slider round"></span>
              </label>Keep me signed in!

            </div>
            

             <div className="button-div">
              <Button className="button-div" variant="contained" color="primary">SIGN IN</Button>
         
            </div>

             </form>
        </div>
      </div>
    );
  }
}

export default Login;
