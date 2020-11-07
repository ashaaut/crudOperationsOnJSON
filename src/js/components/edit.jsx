
import React, { Component } from 'react'
import './../../assets/styles/edit.css'
import Basic from './basic';
import Personal from './personal';
import Work from './work';
import Contacts from './contacts';
import SocialLife from './socialLife';
import Setting from './setting';

class Edit extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedOperation:"Basic"
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(op){
        this.setState({
            selectedOperation:op
        })
    }
    render() {
        let {show,closeModalHandler}=this.props;
        console.log(show)
        let className="modal-bg"
        show?className:className+=" hide-modal"
        console.log(className)
        
        return (
            <div className={className} >
                
                <div className="edit-modal">
                    <div className="title"><h3>Edit User</h3></div>
                    <div className="edit-container">
                        <div className="edit-content">
                            <button  className="edit-button">Basic</button>
                            <button onClick={()=>this.handleClick("Personal")} className="edit-button">Personal</button>
                            <button className="edit-button">Work</button>
                            <button className="edit-button">Contacts</button>
                            <button className="edit-button">Social Life</button>
                            <button className="edit-button">Settings</button>

                        </div>
                        <div className="edit-info">
                            <Work/>
                            {/* {this.state.selectedOperation=="Personal"?<Personal/>:
                            <Basic/>} */}
                        </div>
                    </div>
                    <div className="buttons-div">
                            <button className="updateButton-div">Update</button>

                            <button  onClick={()=>closeModalHandler()}className="cancelButton-div">Cancel</button>

                        
                    </div>

                </div>

            </div>

        )
    }
}
export default Edit;
