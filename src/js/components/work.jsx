import React from 'react';

import TextField from '@material-ui/core/TextField'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
function Work(props){
    let data=props.data
    return(
        <div>
             
             <TextField 
             required 
              label="Company" 
              defaultValue={data.data["Company"]}/>
             <TextField 
             required 
              label="Position" 
              defaultValue={data.data["Position"]}/>
	<TextField 
             required 
              label="Salary" 
              defaultValue={data.data["Salary"]}/>
        </div>
    )
}
export default Work;
