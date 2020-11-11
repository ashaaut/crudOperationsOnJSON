
import React, { Component } from "react";
import './../../assets/styles/login.css'
import TextField from '@material-ui/core/TextField'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Main from './main'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state={
      selected:false
    }
    this.onClick=this.onClick.bind(this)
  }
  onClick(){
    this.setState({selected:!this.state.selected})
  }
  render() {
    const { changeState } = this.props;
    return (

      this.state.selected?<Main/>:


      <div className="login-container">
        <div className="login-name-div">
          <ExitToAppIcon className="appIcon" fontSize="large" />
          <h1>Login</h1>
        </div>
        <div className="signUpNow-div" onClick={() => changeState("signUp")}>Don't have an account?Sign up now!</div>
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
                    <EmailIcon />
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
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            // onChange={this.setPassword}
            // value={this.state.password}
            />

            <div className="toggle-div">
              <input type="checkbox" />Keep me signed in

            </div>


            <div className="button-div">
              <Button className="button-div" variant="contained" onClick= {this.onClick}color="primary">SIGN IN</Button>

            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Login;
