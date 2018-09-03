import React from 'react';
import styled from 'styled-components';
import {
  Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem,
  NavLink } from 'reactstrap';
import logoReact from "../images/logo-react-heart-blue.png";

const NavMenu = styled(NavItem)`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 20px;
  color: #867e7e;
  display: inline;
  text-align: center;

  &:hover, active {
    color: black;
    text-decoration: underline;
  }
`


class NavbarSite extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (

      <div>
        <Navbar light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavMenu>
                <NavLink href="http://localhost:8000">Home</NavLink>
              </NavMenu>
              <NavMenu>
                <NavLink href="http://localhost:8000/journey">Journey</NavLink>
              </NavMenu>
              <NavMenu>
                <NavLink href="http://localhost:8000/projects">Projects</NavLink>
              </NavMenu>
              <NavMenu>
                <NavLink href="http://localhost:8000/contact">Contact</NavLink>
              </NavMenu>
              <NavMenu>
                <NavLink href="https://medium.com/@RebyOliveira" target="_blank">Blog</NavLink>
              </NavMenu>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarSite;
