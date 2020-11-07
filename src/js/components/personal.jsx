import React from 'react';

import TextField from '@material-ui/core/TextField'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
function Personal(){
    return(
        <div>
             
             <TextField 
             required 
              label="Name" 
              defaultValue="Hello World" />
             <TextField 
             required 
              label="surName" 
              defaultValue="Hello World" />
             <div>Birthday <input type="date" value="2013-01-08"/></div>

<div>
<input type="radio" name="gender" value="male"/> Male
<input type="radio" name="gender" value="female"/> Female</div>
              <TextField 
             required 
              label="Image Url" 
              defaultValue="Hello World" />
        </div>
    )
}
export default Personal;
