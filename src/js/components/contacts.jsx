import React from 'react';

import TextField from '@material-ui/core/TextField'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
function Contact(props){
    let {data,handleOnChange}=props;
    return(
        <div className="edit-info-container">
             
             <TextField 
             required 
              label="Email" 
              defaultValue={data.data["Email"]} 
              onChange={(e)=>handleOnChange("Email",e.target.value)}
              />
             <TextField 
             required 
              label="Phone" 
              defaultValue={data.data["Phone"]}
              onChange={(e)=>handleOnChange("Phone",e.target.value)}
              />
	<TextField 
             required 
              label="Address" 
              defaultValue={data.data["Address"]}
              onChange={(e)=>handleOnChange("Address",e.target.value)}
              />
        </div>
    )
}
export default Contact;
