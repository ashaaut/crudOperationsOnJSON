
import React from "react";
import { hot } from 'react-hot-loader/root';
import Login from './components/login'
import './../assets/styles/app.css'

class App extends React.Component {
  render() {
        return (
          <div className="app">
            <Login/>
          </div>
    );
  }
}

export default hot(App);
