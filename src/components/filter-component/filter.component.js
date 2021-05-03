import React from 'react';
import { enums } from '../../config/config';
import { FilterComponentWrapper } from './style';
import PropTypes from 'prop-types';

const FilterComponent = (props) => {
  const { okrsData, onFilterChangeHandler } = props;
  const categoryFilters = [...new Set(okrsData.map(obj => obj.category))];
  categoryFilters.unshift(enums.FILTER_ALL);
  // The function below creates option for filter dropdown list.
  const createOptions = () => categoryFilters.map((filterItem, index) => <option key={index} value={filterItem} >{filterItem}</option>);
  return (
      <FilterComponentWrapper>
          <span className="filter-title">{ enums.CATEGORY_FILTERS }</span>
          <select className="filter-dropdown" onChange={(e) => onFilterChangeHandler(event)}>
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
