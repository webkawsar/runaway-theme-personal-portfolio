import { RingLoader } from "react-spinners";

const Loader = ({ loading, color }) => {

    const override = {
        position: 'absolute',
        left: '40%',
        top: '38%',
        zIndex: '999'
      };
  return <RingLoader cssOverride={override} color={color ? color : ""} loading={loading} size={200} />;
};

export default Loader;
