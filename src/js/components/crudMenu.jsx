import React ,{Component} from 'react'
import './../../assets/styles/crudMenu.css'

class CrudMenu extends Component{
    render(){
        return(
            <div className="menu-container">
                <div className="option">Edit</div>
                <div className="option">Delete</div>
                <div className="option">Block</div>
            </div>

        )
    }
}
export default CrudMenu;