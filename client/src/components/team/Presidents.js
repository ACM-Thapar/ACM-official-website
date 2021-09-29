import dummyImage from '../../images/face4.png';
import PresidentCard from './PresidentCard';

const Presidents = ({ data }) => {
  return (
    <>
      <div className="presidents">
        <a name="presidents" />
        <h2 className="president-heading">Presidents</h2>
        {data.map((president) => {
          return <PresidentCard data={president} />;
        })}
      </div>
    </>
  );
};

export default Presidents;
