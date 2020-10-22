
import React, { Component } from "react";
import './../../assets/styles/signUp.css'
import TextField from '@material-ui/core/TextField'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

class signUp extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {changeState}=this.props;
    return (
      <div className="signUp-container">
        <div className="register-name-div">
          <PersonAddIcon className="person-icon" fontSize="large" />
          <h1>Register</h1>
        </div>
        <div className="registration-div">
          <div className="signInNow-div" onClick={() => changeState("login")}>Already Have an account?Sign In.!</div>
          <form className="form-div">
            <TextField
              placeholder="FullName"
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
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
            
            />
            <TextField
              placeholder="Password"
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              placeholder="Confirm Password"
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <div className="button-div">
              <Button className="button-div" variant="contained" color="primary">SIGN Up</Button>
            </div></form>
        </div>
      </div>
    );
  }
}

export default signUp;
