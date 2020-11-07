import React from 'react';

import TextField from '@material-ui/core/TextField'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
function Contact(props){
    let data=props.data;
    return(
        <div className="edit-info-container">
             
             <TextField 
             required 
              label="Email" 
              defaultValue={data.data["Email"]} />
             <TextField 
             required 
              label="Phone" 
              defaultValue={data.data["Phone"]} />
	<TextField 
             required 
              label="Address" 
              defaultValue={data.data["Address"]} />
        </div>
    )
}
export default Contact;
