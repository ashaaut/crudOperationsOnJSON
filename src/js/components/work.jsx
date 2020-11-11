import React from 'react';

import TextField from '@material-ui/core/TextField'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
function Work(props){
    let {data,handleOnChange}=props;
    return(
        <div className="edit-info-container">
             
             <TextField 
             required 
              label="Company" 
              defaultValue={data["Company"]}
              onChange={(e)=>handleOnChange("Company",e.target.value)}
              />
             <TextField 
             required 
              label="Position" 
              defaultValue={data["Position"]}
              onChange={(e)=>handleOnChange("Position",e.target.value)}
              />
	<TextField 
             required 
              label="Salary" 
              defaultValue={data["Salary"]}
              onChange={(e)=>handleOnChange("Salary",e.target.value)}
              />
        </div>
    )
}
export default Work;
