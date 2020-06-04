import React, {Component} from 'react';
import NavBarComponent from './NavBarComponent';
import Profile from './Profile';
import AuthContext from '../contexts/AuthContext';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import History from './History';

class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      logged:false
    }
  }
  static contextType = AuthContext;
  componentWillMount=()=>{
    this.setState({logged:this.context.isLogged});
    
  }  

  render(){
    var ProfileComponent, HistoryComponent;
    if(this.context.isLogged){
      ProfileComponent = Profile;
      HistoryComponent = History;
    }

    return (
      <BrowserRouter>
        <NavBarComponent/>
        <Switch>
          <Route exact path="/" component={ProfileComponent}/>
          <Route path="/history" component={HistoryComponent}/>
        </Switch>
      </BrowserRouter>
    );
  }

}

export default Main;
