import React from 'react';

import TextField from '@material-ui/core/TextField'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
function Contact(){
    return(
        <div>
             
             <TextField 
             required 
              label="Email" 
              defaultValue="Hello World" />
             <TextField 
             required 
              label="Phone" 
              defaultValue="Hello World" />
	<TextField 
             required 
              label="Address" 
              defaultValue="Hello World" />
        </div>
    )
}
export default Contact;
