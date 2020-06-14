import React, {Component} from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import API from '../utils/API';
import AuthContext from '../contexts/AuthContext';

class History extends Component{
    constructor(props){
        super(props);
        this.state={
            transactions:[]
        }
    }
    static contextType = AuthContext;
    componentWillMount=async()=>{
        const requestBody = {
            email:this.context.userEmail,
            token:this.context.token
        }
        const data = await API.post('getprofile', requestBody);
        this.setState({transactions:data.data.transHistory.reverse().slice(0,10)});
    }
    render(){
        const History = this.state.transactions.map((transaction, id)=>{
            const date = transaction.date.split('T')[0];
            const time = transaction.date.split('T')[1].split('.')[0];
            return(
                <ListGroupItem key={id}>
                    <ListGroupItemHeading>Amount : <strong>{transaction.amount}</strong></ListGroupItemHeading>
                    <ListGroupItemText>
                        {transaction.transType.split(' ')[1]} at {time} on {date}
                    </ListGroupItemText>
              </ListGroupItem>
            )
        });
        return(
            <div class="container">
                <br/>
                <h3>Your last 10 transactions</h3>
                <br/>
                <ListGroup>
                    {History}
                </ListGroup>
            </div>
        )
    }
}
export default History;