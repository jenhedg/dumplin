import React from 'react';
import style from './styles/FilterBox.styles';

const FilterBox = ({ handleChange, className }) => {
  return (
    <div className={className}>
      <label>
        Filter employees
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search for someone!"
        />
      </label>
    </div>
  );
};

export default style(FilterBox);
