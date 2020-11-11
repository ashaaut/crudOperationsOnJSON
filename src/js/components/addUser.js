
import React, { Component } from 'react'
import EmpDetails from './empDetails';


class AddUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedComponent: "Basic",
            data:{
                "id": "",
                "Username": "",
                "Password": "",
                "Name": " ",
                "Surname": "",
                "Gender": "",
                "Profile": "",
                "Company": "",
                "Position": "",
                "Salary": "",
                "Email": "",
                "Phone": "",
                "Address": "",
                "Facebook": "",
                "Twitter": "",
                "Google": "",
                "Active": "",
                "Blocked": "",
                "Registration": "",
                "Last": ""
            }

        }
    }

    


    render() {
        let { data,show,closeModalHandler } = this.props;
        let className = "modal-bg"
        show ? className : className += " hide-modal"
        return (
            <div className={className} >
                <div className="edit-modal">
                    <div className="title"><h3>Add User</h3></div>
                    
                    <div className="edit-container">
                    <EmpDetails data={data}/>
                       
                    </div>
                    <div className="buttons-div">
                        <button  className="updateButton-div">Save</button>
                        <button onClick={() => closeModalHandler()} className="cancelButton-div">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddUser;
