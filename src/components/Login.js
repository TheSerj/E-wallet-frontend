import React, {useState, useContext} from 'react';
import {Form, FormGroup, Input, Button, Modal, ModalBody, ModalHeader, NavLink} from 'reactstrap';
import {Label} from 'reactstrap';
import API from '../utils/API';
import Cookie from "js-cookie";
import AuthContext from '../contexts/AuthContext'
const Login=()=>{
    const [modal, setModal] = useState(false);
    const toggleModal=()=>{
        setModal(!modal);
    }
    const contextValue = useContext(AuthContext);
    const handlesubmit =async(e)=>{
        e.preventDefault();
        const requestBody = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const data = await API.post('/login', requestBody);
        if(data.data.token){
            let hr = 1/24;
            Cookie.set("token", data.data.token, { expires:2*hr});
            Cookie.set("email", data.data.email, { expires:2*hr });
            contextValue.mountComp();
        }else{
            console.log("worng info bro");
        }

        toggleModal();

    }
    const comp = (
        <div>
            <NavLink onClick={toggleModal}>Login</NavLink>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handlesubmit}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="text" name="email" id="email"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password"></Input>
                        </FormGroup>
                        <Button type="submit" color="primary">Login</Button>
                        <Button color="danger" onClick={toggleModal}>Cancel</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
    return comp;
}
export default Login;