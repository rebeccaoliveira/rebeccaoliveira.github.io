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
const TextTitle = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 30px;
  color: rgb(0, 0, 0);
`;
const TextStyle = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 20px;
  color: #867e7e;
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
        <Navbar light expand="lg">
          <NavbarBrand>
            <a href="http://localhost:8000"><img width="70" height="70" src={logoReact} alt="logoReact" className="mx-auto d-block" /> </a>
          </NavbarBrand>
          <div className="collapse navbar-collapse d-none d-md-none d-lg-block" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <TextTitle> Rebecca Oliveira </TextTitle>
                <TextStyle>A (non) Tech Girl on ReactJS</TextStyle>
              </li>
            </ul>
          </div>
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
