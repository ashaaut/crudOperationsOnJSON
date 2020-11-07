import React from 'react';

import TextField from '@material-ui/core/TextField'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
function SocialLife(){
    return(
        <div>
             
             <TextField 
             required 
              label="Facebook" 
              defaultValue="Hello World" />
             <TextField 
             required 
              label="Twitter" 
              defaultValue="Hello World" />
	<TextField 
             required 
              label="google" 
              defaultValue="Hello World" />
        </div>
    )
}
export default SocialLife;
