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

    render(){
        const comp = (
            <div className="container">
                <h3>This profile belongs to {this.context.username}</h3>
                <h5>Remaining Balance is {this.context.balance} </h5>
                <hr/>
                <AddMoney/>
                <hr/>
                <WithdrawMoney/>
            </div>
        )
        return comp;
    }
}
export default Profile;