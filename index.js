import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Hello from './Hello';
import Header from './components/homepage/Header';
import Dashboard from'./components/Patient/dashboard';
import MyDashboard from './components/dashboard/dashboard'
import {Receptionist,patient} from './components/Patient/data.js';
import './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
   // alert(Receptionist)
    return (
      <BrowserRouter>
        <Route
      path='/dashboard'
      render={()=>
      <MyDashboard />}
/>
      <Route
      path='/patient'
      render={()=>
      <Dashboard items={patient} />}
/>
<Route
      path='/Receptionist'
      render={()=>
      <Dashboard items={Receptionist} />}
/>
<Route
      path='/homepage'
      render={()=>
      <Header items={Header} />}
/>

      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
