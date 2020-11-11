import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
function Basic(props){
  let {data,handleOnChange}=props;
  console.log(data)
    return(
        <div>
             <TextField
              variant="standard"
              margin="normal"
              required
              defaultValue={data["Username"]}
              label="UserName"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBoxIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e)=>handleOnChange("Username",e.target.value)}
            />
            <TextField
              variant="standard"
              defaultValue={data["Password"]}
              margin="normal"
              label="Password"
              required
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e)=>handleOnChange("password",e.target.value)}
           />
        </div>
    )
}
export default Basic;
