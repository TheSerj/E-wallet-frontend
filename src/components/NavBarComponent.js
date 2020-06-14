import React, {Component} from 'react';
import {Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink, Collapse} from 'reactstrap';
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';
import History from './History';
import AuthContext from '../contexts/AuthContext';

class NavBarComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      collapsed:true
    }
  }
  static contextType = AuthContext;
  toggleNavbar = ()=>{
    this.setState({collapsed:!this.state.collapsed});
  }
  render (){
    if(!this.context.loading)return null;
    const comp = (
      <div>
        <Navbar fixed="top" color="dark" dark expand="sm">
          <NavbarBrand href="/" className="mr-auto">E-Wallet</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="ml-sm-4">
              {(()=>{
                if(this.context.isLogged){
                  return(
                    <>
                    <NavItem>
                      <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/history">History</NavLink>
                    </NavItem>
                    <NavItem>
                      <Logout/>
                    </NavItem>
                    </>
                  )
                }else{
                  return(<>
                    <NavItem>
                      <Login/>
                    </NavItem>
                    <NavItem>
                      <Signup/>
                    </NavItem>
                    </>
                  )
                }
              })()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
    return comp;
  }

}
export default NavBarComponent;