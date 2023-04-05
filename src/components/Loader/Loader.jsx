import { InfinitySpin } from 'react-loader-spinner';
import { ButtonLoad } from './Loader.styled';
export function Loader() {
  return (
    <ButtonLoad type="button">
      <InfinitySpin width="200" color="rgb(0, 102, 0)" />
    </ButtonLoad>
  );
}
