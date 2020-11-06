import React ,{Component} from 'react'
import './../../assets/styles/crudMenu.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import BlockIcon from '@material-ui/icons/Block';
import Edit from './edit';


class CrudMenu extends Component{
    constructor(){
        super()
        this.state={
            selectedOperation:"",
            show:false
        }
        this.handleClick=this.handleClick.bind(this);
        this.closeModalHandler=this.closeModalHandler.bind(this)
    }
    handleClick(operation){
        this.setState({
            selectedOperation:operation,
            show:true
        })
    }
    closeModalHandler(){
        this.setState(()=>({
            selectedOperation:this.state.selectedOperation,
            show:false
        }))
           
        // console.log("hii")
    }
    render(){
        // console.log(this.state.show)
        return(
            <div>
                <div className="menu-container">
                
                <div className="option" onClick={()=>this.handleClick("Edit")} ><EditIcon/>  Edit</div>
                <div className="option" onClick={()=>this.handleClick("Delete")} ><DeleteIcon/> Delete</div>
                <div className="option"  onClick={()=>this.handleClick("Block")}><BlockIcon/> Block</div>
            </div>
        {this.state.selectedOperation=="Edit"?<Edit show={this.state.show} closeModalHandler={this.closeModalHandler} />:""}
        {/* <Edit show={this.state.show} closeModalHandler={this.closeModalHandler} /> */}
            </div>
            
        )
    }
}
export default CrudMenu;