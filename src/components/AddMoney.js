import React,{useContext, useState} from 'react';
import{Form, FormGroup, Label, Input, Button} from 'reactstrap';
import API from '../utils/API';
import AuthContext from '../contexts/AuthContext';

const AddMoney =(props)=>{
    const [changes, setChanges] = useState(0);
    const contextValue = useContext(AuthContext);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const requestBody = {
            email: contextValue.userEmail,
            amount: parseInt(e.target.amount.value)
        }
        const data = await API.post('/addmoney', requestBody);
        props.func();
    }
    const comp = (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="amount">AddMoney</Label>
                <Input type="number" name="amount" id="amount"></Input>
            </FormGroup>
            <Button type="submit" color="primary">AddMoney</Button>
        </Form>
    )
    return comp;
}
export default AddMoney;