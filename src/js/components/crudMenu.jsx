import React ,{Component} from 'react'
import './../../assets/styles/crudMenu.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import BlockIcon from '@material-ui/icons/Block';
import Edit from './edit';
import Axios from 'axios';
class CrudMenu extends Component{
    constructor(props){
        super(props)
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
    handleDelete(id){
        Axios.delete("http://localhost:3000/employees/"+id);
    }
    render(){
        let data=this.props.data
        // console.log(this.state.show)
        return(
            <div>
                <div className="menu-container">
                
                <div className="option" onClick={()=>this.handleClick("Edit")} ><EditIcon/>  Edit</div>
                <div className="option"  onClick={()=>this.handleDelete(data.data["id"])} ><DeleteIcon/> Delete</div>
                <div className="option"  onClick={()=>this.handleClick("Block")}><BlockIcon/> Block</div>
            </div>
        {this.state.selectedOperation=="Edit"?<Edit data={data}show={this.state.show} closeModalHandler={this.closeModalHandler} />:""}
        {/* <Edit show={this.state.show} closeModalHandler={this.closeModalHandler} /> */}
            </div>
            
        )
    }
}
export default CrudMenu;