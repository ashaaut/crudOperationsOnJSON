import React from 'react';

import TextField from '@material-ui/core/TextField'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
function Personal(props) {
    let {data,handleOnChange}=props;
    return (
        <div className="personal-info-container">

            <TextField
                required
                label="Name"
                defaultValue={data["Name"]}
                onChange={(e)=>handleOnChange("Name",e.target.value)}
                />
            <TextField
                required
                label="surName"
                defaultValue={data["Surname"]} 
                onChange={(e)=>handleOnChange("Surname",e.target.value)}
                />
            <div>Birthday <input type="date" value="2013-01-08" /></div>
            <div>
                <input type="radio" name="gender" value="male" /> Male
                <input type="radio" name="gender" value="female" /> Female
                </div>
            <TextField
                required
                label="Image Url"
                defaultValue={data["Profile"]}
                onChange={(e)=>handleOnChange("Image Url",e.target.value)}
                />
        </div>
    )
}
export default Personal;
