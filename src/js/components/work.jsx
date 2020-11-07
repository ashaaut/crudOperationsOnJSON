import React from 'react';

import TextField from '@material-ui/core/TextField'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
function Work(){
    return(
        <div>
             
             <TextField 
             required 
              label="Company" 
              defaultValue="Hello World" />
             <TextField 
             required 
              label="Position" 
              defaultValue="Hello World" />
	<TextField 
             required 
              label="Salary" 
              defaultValue="Hello World" />
        </div>
    )
}
export default Work;
