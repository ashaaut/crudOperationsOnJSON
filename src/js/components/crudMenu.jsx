import React ,{Component} from 'react'
import './../../assets/styles/crudMenu.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import BlockIcon from '@material-ui/icons/Block';


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
                <div className="option" onClick={()=>this.handleClick("Edit")} ><EditIcon/>  Edit</div>
                <div className="option" onClick={()=>this.handleClick("Delete")} ><DeleteIcon/> Delete</div>
                <div className="option"  onClick={()=>this.handleClick("Block")}><BlockIcon/> Block</div>
            </div>

        )
    }
}
export default CrudMenu;