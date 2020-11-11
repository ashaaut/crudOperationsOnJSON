import React, { Component } from 'react';
import './../../assets/styles/navBar.css'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddUser from './addUser'
class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            isAddUserModalOpen: false,
            
        }
        this.handleAddUser = this.handleAddUser.bind(this);
        this.closeModalHandler=this.closeModalHandler.bind(this)
    }
    handleAddUser() {
        this.setState({
            isAddUserModalOpen: true,
        })
    }
    closeModalHandler(){
        this.setState(()=>({
            isAddUserModalOpen:false,
        }))
    }

    render() {
        return (
            <div className="nav-container">
                <div ><PersonAddIcon fontSize="large" className="addUser-div" onClick={this.handleAddUser} /></div>
                <AddUser show={this.state.isAddUserModalOpen} closeModalHandler={this.closeModalHandler}/>
            </div>
        )
    }
}
export default NavBar;
