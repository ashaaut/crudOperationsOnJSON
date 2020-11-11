import React, { Component } from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import WorkIcon from '@material-ui/icons/Work';
import { MdMoreVert } from "react-icons/md";
import CrudMenu from './crudMenu'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';


class Employee extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      selectedOption: false
    })
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    this.setState({ selectedOption: !this.state.selectedOption })
  }

  render() {
    const data = this.props.data;
    // console.log(data)
    // console.log(this.state.selectedOption)
    return (
      <div className="card-container">
        <div className="card-image">
          <img className="profile" src={data["Profile"]} ></img>
          <div>
            <FacebookIcon className="icon"/>
          <TwitterIcon className="icon"/>
          <MailOutlineIcon className="icon"/>
          </div>
        </div>

        <div className="card-data">
          <div className="emp-bar">
            <div className="emp-name">
              <PersonOutlineIcon />
              {data["Name"]}
              {" "}
              {data["Surname"]}
            </div>
            <div className="menu-icon" >
              <MdMoreVert size="1.5em" onClick={this.onClick} />
            </div>
          </div>

          <div className="emp-card-body">
            <div className="emp-data">
              <div className="data"><WorkIcon />{data["Position"]}</div>
              <div className="data"><MailOutlineIcon />{data["Email"]}</div>
              <div className="data"><PhoneIcon /> {data["Phone"]}</div>
              <div className="data"><RoomIcon />{data["Address"]}</div>
            </div>

            <div className="menus">
              {this.state.selectedOption ? <CrudMenu data={data}/> : <div></div>}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Employee;
