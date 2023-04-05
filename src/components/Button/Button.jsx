import { BtnLoad } from './Button.styled';
import PropTypes from 'prop-types';

export function Button({ onChange }) {
  return (
    <BtnLoad type="button" onClick={onChange}>
      Load more
    </BtnLoad>
  );
}

Button.propTypes = {
  onChange: PropTypes.func.isRequired,
};
