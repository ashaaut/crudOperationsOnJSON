import React from 'react';

import TextField from '@material-ui/core/TextField'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
function SocialLife(props){
    let {data,handleOnChange}=props;
    return(
        <div className="edit-info-container">
             
             <TextField 
             required 
              label="Facebook" 
              defaultValue={data["Facebook"]}
              onChange={(e)=>handleOnChange("Facebook",e.target.value)}
              />
             <TextField 
             required 
              label="Twitter" 
              defaultValue={data["Twitter"]} 
              onChange={(e)=>handleOnChange("Twitter",e.target.value)}
              />
	<TextField 
             required 
              label="google" 
              defaultValue={data["Google"]}
              onChange={(e)=>handleOnChange("Google",e.target.value)}
              />
        </div>
    )
}
export default SocialLife;
