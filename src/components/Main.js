import React, {Component} from 'react';
import NavBarComponent from './NavBarComponent';
import Profile from './Profile';
import AuthContext from '../contexts/AuthContext';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import History from './History';
import Advertise from './Advertise';
import Cookie from 'js-cookie';
class Main extends Component{
  constructor(props){
    super(props);
  }
  
  static contextType = AuthContext;


  render(){
    var homeContent;
    if(this.context.isLogged){
      homeContent = <Profile/>
    }else{
      homeContent = <Advertise/>;
    }
    if(!this.context.loading)return null;
    return (
      <BrowserRouter>
        <NavBarComponent/>
        <Switch>
          
          <Route path='/' exact>
              {homeContent}
          </Route>
          <Route path='/history' exact>
              {this.context.isLogged? <History/>: <Advertise/>}
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </BrowserRouter>
    );
  }

}

export default Main;
