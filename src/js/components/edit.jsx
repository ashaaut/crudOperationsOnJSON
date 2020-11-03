import React ,{Component} from 'react'
import './../../assets/styles/crudMenu.css'

class CrudMenu extends Component{
    constructor(){
        super()
        this.state={
            selectedOperation:""
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(operation){
        this.setState({
            selectedOperation:operation
        })
    }

    render(){
        console.log(this.state.selectedOperation)
        return(
            <div className="menu-container">
                <div className="option" onClick={()=>this.handleClick("Edit")} >Edit</div>
                <div className="option" onClick={()=>this.handleClick("Delete")} >Delete</div>
                <div className="option"  onClick={()=>this.handleClick("Block")}>Block</div>
            </div>

        )
    }
}
export default CrudMenu;