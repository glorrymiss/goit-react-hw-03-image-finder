import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageItem, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModalWindow = () => {
    this.setState({ showModal: true });
  };

  closeModalWindow = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { webformatURL, user, largeImageURL } = this.props;
    return (
      <ImageItem onClick={this.openModalWindow}>
        <Image src={webformatURL} alt={user} />
        {this.state.showModal && (
          <Modal
            url={largeImageURL}
            user={user}
            closeModal={this.closeModalWindow}
          />
        )}
      </ImageItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
