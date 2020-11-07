import React from 'react';

import TextField from '@material-ui/core/TextField'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
function Contacts(){
    return(
        <div>
             <TextField
              variant="standard"
              placeholder="Username"
              margin="normal"
              required
              label="UserName"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBoxIcon />
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
           />
        </div>
    )
}
export default Contacts;