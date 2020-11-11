import React, { Component } from 'react';
import './../../assets/styles/navBar.css'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddUser from './addUser'
class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            isAddUserModalOpen: false,
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
        this.handleAddUser = this.handleAddUser.bind(this);
        this.closeModalHandler=this.closeModalHandler.bind(this)
    }
    handleAddUser() {
        this.setState({
            isAddUserModalOpen: true,
            data:this.state.data
        })
    }
    closeModalHandler(){
        this.setState(()=>({
            isAddUserModalOpen:false,
            data:this.state.data
        }))
    }

    render() {
        return (
            <div className="nav-container">
                <div ><PersonAddIcon fontSize="large" className="addUser-div" onClick={this.handleAddUser} /></div>
                <AddUser data={this.state.data} show={this.state.isAddUserModalOpen} closeModalHandler={this.closeModalHandler}/>
            </div>
        )
    }
}
export default NavBar;
