
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
        console.log(this.state.selectedOperation)
        let className="modal-bg"
        show?className:className+=" hide-modal"
        let data=this.props.data;
        
        return (
            <div className={className} >
                
                <div className="edit-modal">
                    <div className="title"><h3>Edit User</h3></div>
                    <div className="edit-container">
                        <div className="edit-content">
                            <button  onClick={()=>this.handleClick("Basic")} className="edit-button">Basic</button>
                            <button onClick={()=>this.handleClick("Personal")} className="edit-button">Personal</button>
                            <button  onClick={()=>this.handleClick("Work")}className="edit-button">Work</button>
                            <button onClick={()=>this.handleClick("Contacts")} className="edit-button">Contacts</button>
                            <button onClick={()=>this.handleClick("SocialLife")} className="edit-button">Social Life</button>
                            <button onClick={()=>this.handleClick("Settings")} className="edit-button">Settings</button>

                        </div>
                        <div className="edit-info">
                            {this.state.selectedOperation=="Basic"?<Basic data={data}/>:
                            this.state.selectedOperation=="Personal"?<Personal data={data}/>:
                            this.state.selectedOperation=="Work"?<Work data={data}/>:
                            this.state.selectedOperation=="Contacts"?<Contacts data={data}/>:
                            this.state.selectedOperation=="SocialLife"?<SocialLife data={data}/>:
                            this.state.selectedOperation=="Settings"?<Setting data={data}/>:""}
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
