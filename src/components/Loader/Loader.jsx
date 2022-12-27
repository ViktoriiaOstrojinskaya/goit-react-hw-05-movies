import { ThreeDots } from 'react-loader-spinner';
import { LoaderBox } from './LoaderBox';

const Loader = () => {
  return (
    <LoaderBox>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="orange"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderBox>
  );
};

export default Loader;
