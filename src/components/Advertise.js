import React, {Component} from 'react';
import ewallet from '../images/e-wallet.jpg';
import ewallet1 from '../images/e-wallet1.jpg';
import ewallet2 from '../images/e-wallet2.jpg';
import ewallet3 from '../images/e-wallet3.jpg';
import {Row, Col, Button} from 'reactstrap';
import testAPI from '../utils/testAPI';

class Advertise extends Component{
    constructor(props){
        super(props);
    }
    handleApi(){
        console.log("button clicked");
        testAPI.get('/users').then((res)=>{
            console.log(res.data[0].fullName);
        })
    }
    render(){
        const comp = (
            <div className="container text-center">
                <Button onClick={this.handleApi}>Click this</Button>
                <Row>
                    <Col xs="12" sm="6">
                        <img className="img-fluid img-thumbnail" src={ewallet1}/>
                    </Col>
                    <Col xs="12" sm="6">
                        <img className="img-fluid img-thumbnail" src={ewallet}/>
                    </Col>
                    <Col xs="12" sm="6">
                        <img className="img-fluid img-thumbnail" src={ewallet2}/>
                    </Col>
                    <Col xs="12" sm="6">
                        <img className="img-fluid img-thumbnail" src={ewallet3}/>
                    </Col>
                </Row>

            </div>
        )
        return comp;
    }
}
export default Advertise;