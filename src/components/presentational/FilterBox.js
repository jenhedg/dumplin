import React from 'react';

const FilterBox = (p) => {
  return (
    <div className="field">
      <label className="label">Filter employees</label>
      <div className="control">
        <input
          onChange={p.handleChange}
          className="input"
          maxLength="3"
          type="text"
          placeholder="Search for someone!"
        />
      </div>
    </div>
  );
};

export default FilterBox;
