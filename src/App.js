import React from "react";
import Box from "./components/Box"
import './App.css';
import "./style/global.css"
const tempMin=-20
const tempMax=40
const heartMin=80
const heartMax= 180
const stepsMin = 0
const stepsMax = 50000

export class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
      <p>Heart: {heartMin}</p>
      <p>Temperature:{ tempMin}</p>
      <p> Step:{stepsMin}</p>
      <Box icon="local_drink"/>
      <Box icon="directions_walk"/>
      <Box icon="favorite" />
      <Box icon="wb_sunny"/>
      </div>
      </div>
    );
  }
}

export default App;