import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col, Button, Modal,
ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false
    };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState(number) {
    const key = `modal${number}`
    const value = this.state[key]
    this.setState({
      [key]: !value
    });
  }

  render() {
    const toggle1 = (e) => this.toggleState(1);
    const toggle2 = (e) => this.toggleState(2);

    return (
      <div>
        <Button color="danger" onClick={toggle1}>Modal 1</Button>
        <Modal isOpen={this.state.modal1} toggle={toggle1} className={this.props.className}>
          <ModalHeader toggle={toggle1}>Modal Test One</ModalHeader>
          <ModalBody>
            This is only a TEST ONE -> 1
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle1}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Button color="danger" onClick={toggle2}>Modal 2</Button>
        <Modal isOpen={this.state.modal2} toggle={toggle2} className={this.props.className}>
          <ModalHeader toggle={toggle2}>Modal Test Two</ModalHeader>
          <ModalBody>
            This is only a TEST TWO -> 2
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle2}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
