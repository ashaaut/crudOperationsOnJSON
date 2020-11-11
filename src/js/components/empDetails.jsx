
import React, { Component } from 'react'
import './../../assets/styles/edit.css'
import Basic from './basic';
import Personal from './personal';
import Work from './work';
import Contacts from './contacts';
import SocialLife from './socialLife';
import Setting from './setting';


class empDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedComponent: "Basic",
            empData: this.props.data.data,

        }
        this.handleClick = this.handleClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    updateData(name, value) {
        let Data = this.props.data;
        Data[name] = value
        return Data
    }

    handleClick(selectedComponent) {
        this.setState({
            selectedComponent: selectedComponent,
            empData: this.state.empData
        })
    }

    handleOnChange(name, value) {
        this.setState({
            selectedComponent: this.state.selectedComponent,
            empData: this.updateData(name, value)
        })
    }

    // handleUpdate(id) {
    //     fetch("http://localhost:3000/employees/" +id,
    //         {
    //             method: "PUT",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(this.state.empData)

    //         }).then((result) => {
    //             result.json().then((resp) => {
    //                  alert("Employee information is Updated")
    //             })
    //             // alert("Employee information is Updated")
    //         })
    // }
    
    render() {
        let data = this.props.data;
        // console.log(data)

        return (<div className="empDetails-container">
                <div className="edit-content">
                             <button onClick={() => this.handleClick("Basic")} className="edit-button">Basic</button>
                             <button onClick={() => this.handleClick("Personal")} className="edit-button">Personal</button>
                             <button onClick={() => this.handleClick("Work")} className="edit-button">Work</button>
                             <button onClick={() => this.handleClick("Contacts")} className="edit-button">Contacts</button>
                             <button onClick={() => this.handleClick("SocialLife")} className="edit-button">Social Life</button>
                             <button onClick={() => this.handleClick("Settings")} className="edit-button">Settings</button>
                         </div>
                         <div className="edit-info">
                             {this.state.selectedComponent == "Basic" ? <Basic handleOnChange={this.handleOnChange} data={data} /> :
                                 this.state.selectedComponent == "Personal" ? <Personal handleOnChange={this.handleOnChange} data={data} /> :
                                     this.state.selectedComponent == "Work" ? <Work handleOnChange={this.handleOnChange} data={data} /> :
                                         this.state.selectedComponent == "Contacts" ? <Contacts handleOnChange={this.handleOnChange} data={data} /> :
                                             this.state.selectedComponent == "SocialLife" ? <SocialLife handleOnChange={this.handleOnChange} data={data} /> :
                                                 this.state.selectedComponent == "Settings" ? <Setting handleOnChange={this.handleOnChange} data={data} /> : <Basic />}
                         </div>
        </div>
              
        )
    }
}
export default empDetails;
