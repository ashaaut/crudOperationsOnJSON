
import React, { Component } from 'react'
import EmpDetails from './empDetails';


class AddUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedComponent: "Basic",

        }
        this.handleClick = this.handleClick.bind(this);
        // this.handleOnChange = this.handleOnChange.bind(this);
    }

    // updateData(name, value) {
    //     let Data = this.props.data;
    //     Data[name] = value
    //     return Data
    // }

    handleClick(selectedComponent) {
        this.setState({
            selectedComponent: selectedComponent,
        })
    }

    
    render() {
        let { data, show,closeModalHandler } = this.props;
        let className = "modal-bg"
        show ? className : className += " hide-modal"
        // console.log("hii")
        console.log(data)
        console.log(show)
        console.log(closeModalHandler)
        return (
            <div className={className} >
                <div className="edit-modal">
                    <div className="title"><h3>Edit User</h3></div>
                    
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
