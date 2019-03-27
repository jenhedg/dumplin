import React from 'react';
import { connect } from 'react-redux';
import Grid from '../presentational/Grid';
import { EMPLOYEE_IMAGES } from '../../consts';

const filterEmployees = (filterTerm) => {
  return EMPLOYEE_IMAGES.filter(employee => employee.alt.includes(filterTerm));
};

const EmployeeImagesGrid = (props) => {
  return <Grid images={filterEmployees(props.filterTerm)} />;
};

const mapStateToProps = (state) => {
  return {
    filterTerm: state.filterTerm,
  };
};

export default connect(mapStateToProps)(EmployeeImagesGrid);
