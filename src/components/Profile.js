import React, {Component} from 'react';
import AuthContext from '../contexts/AuthContext';
import API from '../utils/API';
import AddMoney from './AddMoney';
import WithdrawMoney from './WithdrawMoney';

class Profile extends Component{
    static contextType = AuthContext;
    constructor(props){
        super(props);
        this.state={
            profile:{},
            cost:0
        }
    }

    componentWillMount=async()=>{
        
        const requestBody = {
            email:this.context.userEmail,
            token:this.context.token
        }
        const data = await API.post('getprofile', requestBody);
        this.setState({cost:1});
        this.setState({profile:data.data});
    }

    render(){
        if(this.state.cost<1)return null;
        console.log("profile");
        const comp = (
            <div className="container">
                <h3>This profile belongs to {this.state.profile.name}</h3>
                <h5>Remaining Balance is {this.state.profile.balance} </h5>
                <hr/>
                <AddMoney func={this.componentWillMount}/>
                <hr/>
                <WithdrawMoney func={this.componentWillMount}/>
            </div>
        )
        return comp;
    }
}
export default Profile;