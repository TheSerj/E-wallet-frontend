import React,{Component} from 'react';
import{Form, FormGroup, Label, Input, Button} from 'reactstrap';
import API from '../utils/API';
import AuthContext from '../contexts/AuthContext';

class AddMoney extends Component{
    constructor(props){
        super(props);
    }
    static contextType = AuthContext;
    handleSubmit=async(e)=>{
        e.preventDefault();
        const requestBody = {
            email: this.context.userEmail,
            amount: parseInt(e.target.amount.value),
            token:this.context.token
        }
        API.post('/withdrawmoney', requestBody).then(()=>{
            this.context.toggleBalance(-requestBody.amount);
        })
        
    }
    render(){
        const comp = (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="amount">Withdraw Money</Label>
                    <Input type="number" name="amount" id="amount"></Input>
                </FormGroup>
                <Button type="submit" color="primary">Withdraw Money</Button>
            </Form>
        )
        return comp;
    }

}
export default AddMoney;