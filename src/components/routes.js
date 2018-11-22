import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import Home from "../components/home";

class Routess extends React.Component
{
  render(){
      return(
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      )
    }
}

export default Routess;
