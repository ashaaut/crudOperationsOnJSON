import React from 'react';

import TextField from '@material-ui/core/TextField'
function Setting(props) {
    let data = props.data
    return (
        <div className="edit-info-container">
            <div>

                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label for="vehicle1"> Active</label>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                <label for="vehicle2"> Blocked</label>
            </div>
            <div>{data.data["Registration"]}</div>
            <div>{data.data["Last"]}</div>
            <TextField
                required
                label="Choose bg Color"
                defaultValue="purple" />
        </div>
    )
}
export default Setting;
