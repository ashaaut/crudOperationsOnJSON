
import React from "react";
import { hot } from 'react-hot-loader/root';
import Login from './components/login'
import SignUp from './components/signUp.jsx'
import './../assets/styles/app.css'
import Emp from './components/employees'

class App extends React.Component {
  constructor(){
    super()
      this.state={
        selected:"login"
      }
        this.changeState = this.changeState.bind(this)
  }

   changeState(e) {
        this.setState({selected: e})
    }

  render() {
        return (
          <div className="app">
            <Emp/>
          {/* {this.state.selected=="login"?<Login changeState={this.changeState}/>:<SignUp changeState={this.changeState}/>} */}
          
          </div>
    );
  }
}

export default hot(App);
