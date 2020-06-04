import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import AuthContext from './contexts/AuthContext';
import Main from './components/Main';
import Cookie from "js-cookie";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      islogged : false,
      userEmail:"null",

    }
  }
  toggleLogin=()=>{
    this.setState({islogged:!this.state.islogged});
  }
  componentWillMount=()=>{
    if(Cookie.get('token')){
      this.setState({islogged:true, userEmail:Cookie.get('email')}); 
    }else{
      console.log("logout");
      this.setState({islogged:false, userEmail:"null"});
    }

  }
  
  render(){
    return (
      <AuthContext.Provider value={
        {isLogged:this.state.islogged,
        toggleLogin:this.toggleLogin,
        userEmail:this.state.userEmail,
        mountComp:this.componentWillMount
        }}>
        <Main />
      </AuthContext.Provider>
    );
  }
}

export default App;
