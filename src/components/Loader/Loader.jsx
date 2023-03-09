import { FallingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <FallingLines
        color="red"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </LoaderWrapper>
  );
};
