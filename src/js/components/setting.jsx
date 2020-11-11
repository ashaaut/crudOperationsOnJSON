import React from 'react';

import TextField from '@material-ui/core/TextField'
function Setting(props) {
    let {data,handleOnChange}=props;
    return (
        <div className="edit-info-container">
            <div className="checkbox-div">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label for="vehicle1"> Active</label>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                <label for="vehicle2"> Blocked</label>
            </div>
            <div className="reg-last-div">{data["Registration"]}</div>
            <div className="reg-last-div">{data["Last"]}</div>
            <TextField
                required
                label="Choose bg Color"
                defaultValue="purple" 
                />
        </div>
    )
}
export default Setting;
