import React, {useState, useContext} from 'react';
import {Form, FormGroup, Input, Button, Modal, ModalBody, ModalHeader, NavLink} from 'reactstrap';
import {Label} from 'reactstrap';
import Cookie from 'js-cookie';
import AuthContext from '../contexts/AuthContext'

const Login=()=>{
    const [modal, setModal] = useState(false);
    const toggleModal=()=>{
        setModal(!modal);
    }
    const contextValue = useContext(AuthContext);
    const handleLogout=()=>{
        Cookie.remove('token');
        Cookie.remove('email');
        toggleModal();
        contextValue.mountComp();
    }

    const comp = (
        <div>
            <NavLink onClick={toggleModal}>Logout</NavLink>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Logout</ModalHeader>
                <ModalBody>
                    <h4>Are you Sure</h4>
                    <br/>
                    <Button color="danger" onClick={handleLogout}>Logout</Button>
                <Button color="danger" onClick={toggleModal}>Cancel</Button>
                </ModalBody>
                
            </Modal>
        </div>
    );
    return comp;
}
export default Login;