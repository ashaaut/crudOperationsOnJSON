import React,{Component} from 'react';
import Data from './../../data/data.json';
import Employee from './employee';
import './../../assets/styles/employee.css'

class Employees extends Component{
    render(){
        const data=Data.employees;
        return(
            <div className="employee-container">
                {data.map(emp=><Employee data={emp}/>)}
        
            </div>
        )
    }
}

export default Employees;