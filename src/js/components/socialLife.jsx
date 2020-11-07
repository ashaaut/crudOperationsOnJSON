import React from 'react';

import TextField from '@material-ui/core/TextField'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
function SocialLife(props){
    let data=props.data;
    return(
        <div className="edit-info-container">
             
             <TextField 
             required 
              label="Facebook" 
              defaultValue={data.data["Facebook"]}/>
             <TextField 
             required 
              label="Twitter" 
              defaultValue={data.data["Twitter"]} />
	<TextField 
             required 
              label="google" 
              defaultValue={data.data["Google"]} />
        </div>
    )
}
export default SocialLife;
