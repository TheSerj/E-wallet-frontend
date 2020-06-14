import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import AuthContext from './contexts/AuthContext';
import Main from './components/Main';
import Cookie from "js-cookie";
import API from './utils/API';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      islogged : false,
      userEmail:null,
      username:null,
      balance:null,
      token:null,
      made:0
    }
  }
  toggleLogin=()=>{
    this.setState({islogged:!this.state.islogged});
  }
  toggleBalance=(k)=>{
    console.log(k);
    this.setState({balance:this.state.balance+k});
  }
  componentWillMount=async()=>{
    if(Cookie.get('token')){
      const requestBody = {
        email:Cookie.get('email'),
        token:Cookie.get('token')
      }
      const data = await API.post('getprofile', requestBody);
      await this.setState({username:data.data.name, balance:data.data.balance, made:1});
      await this.setState({islogged:true, userEmail:Cookie.get('email'), token:Cookie.get('token'), made:1});


    }else{
      console.log("please login");
      this.setState({islogged:false, userEmail:"null", made:1});
    }

  }
  
  render(){
    
    return (
      <AuthContext.Provider value={
        {isLogged:this.state.islogged,
        loading:this.state.made,
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
