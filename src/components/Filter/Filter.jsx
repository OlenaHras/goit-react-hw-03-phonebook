import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

const Filter = ({ onFilter }) => {
  return (
    <>
      <label>
        Find contacts by name <br />
        <FilterInput
          type="text"
          onChange={e => onFilter(e.currentTarget.value)}
        />
      </label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onFilter: PropTypes.func,
};
