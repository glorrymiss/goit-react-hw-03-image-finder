import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = event => {
    if (event.code === 'Escape') {
      this.props.closeModalWindow();
    }
  };
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }
  hendleClose = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModalWindow();
    }
  };

  render() {
    const { url, user } = this.props;

    return (
      <Overlay onClick={this.hendleClose}>
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
  closeModalWindow: PropTypes.func.isRequired,
};
