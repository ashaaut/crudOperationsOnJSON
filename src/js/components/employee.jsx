import React, { Component } from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import WorkIcon from '@material-ui/icons/Work';
import { MdMoreVert} from "react-icons/md";



class Employee extends Component {
  constructor(props) {
    super(props)
    this.state=({
      selectedOption:null
    })
  }
  onClick(){
    console.log("clicked")
  }
  
  render() {
    const options = ["Edit", "update", "delete"]
    const data = this.props;
    console.log(data.data["Profile"])
    console.log(this.state.selectedOption)
    return (
      <div className="card-container">
        <div className="card-image">
          
          <img  src={data.data["Profile"]} ></img>
        </div>
        <div className="card-data">
          <div className="emp-name">
            <PersonOutlineIcon />
            {data.data["Name"]}
            {data.data["Surname"]}
            <div className="menu" >
            <MdMoreVert size="1.5em" onClick={this.onClick}/>

            </div>
            

          </div>
          <div className="emp-data">
            <div className="data"><WorkIcon/>{data.data["Position"]}</div>
            <div className="data"><MailOutlineIcon />{data.data["Email"]}</div>
            <div className="data"><PhoneIcon /> {data.data["Phone"]}</div>
            <div className="data"><RoomIcon />{data.data["Address"]}</div>

          </div>

        </div>
      </div>
    )
  }
}

export default Employee;
