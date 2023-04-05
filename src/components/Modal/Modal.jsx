import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { url, user } = this.props;

    return (
      <Overlay onClick={this.handleBackdropClose}>
        <ModalWindow>
          <img src={url} alt={user} />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
