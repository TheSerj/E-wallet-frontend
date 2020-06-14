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
      userEmail:null,
      username:null,
      balance:null,
      token:null
    }
  }
  toggleLogin=()=>{
    this.setState({islogged:!this.state.islogged});
  }
  toggleBalance=(k)=>{
    console.log(k);
    this.setState({balance:this.state.balance+k});
  }
  componentWillMount=(e)=>{
    if(Cookie.get('token')){
      this.setState({islogged:true, userEmail:Cookie.get('email'), token:Cookie.get('token')}); 
    }else{
      console.log("please login");
      this.setState({islogged:false, userEmail:"null"});
    }
  }
  
  render(){
    return (
      <AuthContext.Provider value={
        {isLogged:this.state.islogged,
        toggleLogin:this.toggleLogin,
        token:this.state.token,
        userEmail:this.state.userEmail,
        mountComp:this.componentWillMount,
        username:this.state.username,
        balance:this.state.balance,
        toggleBalance:this.toggleBalance
        }}>
        <Main />
      </AuthContext.Provider>
    );
  }
}

export default App;
