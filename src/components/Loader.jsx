import { RingLoader } from "react-spinners";

const Loader = ({ loading, color }) => {

    const override = {
        position: 'fixed',
        left: '42%',
        top: '34%',
        zIndex: '999'
      };
  return <RingLoader cssOverride={override} color={color ? color : ""} loading={loading} size={200} />;
};

export default Loader;
