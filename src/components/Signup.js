import React, {useState} from 'react';
import {Form, FormGroup, Input, Button, Modal, ModalBody, ModalHeader, NavLink} from 'reactstrap';
import {Label} from 'reactstrap';
import API from '../utils/API';
const Login=()=>{
    const [modal, setModal] = useState(false);

    const toggleModal=()=>{
        setModal(!modal);
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const requestBody = {
            email: e.target.email.value,
            password: e.target.password.value,
            name:e.target.name.value
        }

        const data = await API.post('/signup', requestBody);
        toggleModal();
    }
    const comp = (
        <div>
            <NavLink onClick={toggleModal}>Signup</NavLink>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Signup</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="name">Full name</Label>
                            <Input type="text" name="name" id="name"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="text" name="email" id="email"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password"></Input>
                        </FormGroup>
                        <Button type="submit" color="primary">Signup</Button>
                        <Button color="danger" onClick={toggleModal}>Cancel</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
    return comp;
}
export default Login;