import {
  ItemStatistic,
  ListStatistic,
  ValueStatistic,
} from "./Statistics.styled";
import PropTypes from "prop-types";

const Statistics = ({ stateObj, total, positivePercentage }) => {
  return (
    <ListStatistic>
      {Object.keys(stateObj).map(property => (
        <ItemStatistic key={property}>
          <ValueStatistic>{property}</ValueStatistic>
          {stateObj[`${property}`]}
        </ItemStatistic>
      ))}

      <ItemStatistic key="total">
        <ValueStatistic>Total:</ValueStatistic>
        {total(Object.values(stateObj))}
      </ItemStatistic>
      <ItemStatistic key="positivePercentage">
        <ValueStatistic>Positive feedback:</ValueStatistic>
        {positivePercentage()}
      </ItemStatistic>
    </ListStatistic>
  );
};

Statistics.propTypes = {
  stateObj: PropTypes.object.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
