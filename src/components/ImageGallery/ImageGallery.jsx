import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';
import PropTypes from 'prop-types';
export function ImageGallery({ images, key }) {
  return (
    <ImageList key={key}>
      {images.map(({ id, webformatURL, user, largeImageURL }) => {
        return (
          <ImageGalleryItem
            id={id}
            key={id}
            webformatURL={webformatURL}
            user={user}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ImageList>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
