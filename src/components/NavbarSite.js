import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link'
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem,
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
  
`
const HomeLink = styled(Link)`
  &:hover{
    text-decoration: none;
  } 
`

const PageLink = ({url, text}) => (
  <Link to={url} className="nav-link">
    {text}
  </Link>
)

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
          <div className="collapse navbar-collapse d-none d-md-none d-lg-block" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <HomeLink to="/"><TextTitle> Rebecca Oliveira </TextTitle></HomeLink>
              </li>
            </ul>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavMenu>
                <NavLink tag={() => <PageLink url="/" text="Home" />}/>
              </NavMenu>
              <NavMenu>
                <NavLink tag={() => <PageLink url="/curriculum" text="Curriculum" />}/>
              </NavMenu>
              <NavMenu>
                <NavLink tag={() => <PageLink url="/projects" text="Projects" />}/>
              </NavMenu>
              <NavMenu>
                <NavLink tag={() => <PageLink url="/contact" text="Contact" />}/>
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
