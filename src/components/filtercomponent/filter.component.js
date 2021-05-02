import React from 'react';
import { FilterComponentWrapper } from './style';
import PropTypes from 'prop-types';

const FilterComponent = (props) => {
  const { okrsData, onFilterChangeHandler } = props;
  const categoryFilters = [...new Set(okrsData.map(obj => obj.category))];
  categoryFilters.unshift('All');
  const createOptions = () => categoryFilters.map((filterItem, index) => <option key={index} value={filterItem} >{filterItem}</option>);
  return (
      <FilterComponentWrapper>
          <span className="filter-title">Category Filters: </span>
          <select onChange={(e) => onFilterChangeHandler(event)}>
            {createOptions()}
          </select>
      </FilterComponentWrapper>
  );
};

FilterComponent.propTypes = {
  okrsData: PropTypes.array,
  onFilterChangeHandler: PropTypes.func
};

export default FilterComponent;
