import React from 'react';

const FilterBox = ({ handleChange }) => {
  return (
    <div className="field">
      <label className="label">Filter employees</label>
      <div className="control">
        <input onChange={handleChange} className="input" type="text" placeholder="Search for someone!" />
      </div>
    </div>
  );
};

export default FilterBox;
