import React, { Component } from 'react';
import logo from './logo.svg';
import Modal from './Modal';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen} onClose={this.toggleModal} >
          Here's some content for the modal
        </Modal>
      </div>
    );
  }
}

export default App;
