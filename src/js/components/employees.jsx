import React,{Component} from 'react';

import Employee from './employee';
import Axios from 'axios';
import './../../assets/styles/employee.css'

class Employees extends Component{
constructor(){
super();
this.state = {
data: []
}
}

componentDidMount(){
Axios.get("http://localhost:3000/employees")
.then(result => {
console.log(result);
this.setState({data: result.data})
})
}
    render(){
        const data=data;
        return(
            <div className="employee-container">
                {this.state.data.map(emp=><Employee data={emp}/>)}
        
            </div>
        )
    }
}

export default Employees;
