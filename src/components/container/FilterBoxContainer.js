import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilterTerm } from '../../actions/Actions';
import FilterBox from '../presentational/FilterBox';

class FilterBoxContainer extends Component {
  handleChange = (e) => {
    const filterTerm = e.target.value;
    this.props.setFilterTerm(filterTerm);
  };

  render() {
    return <FilterBox handleChange={this.handleChange} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterTerm: filterTerm => dispatch(setFilterTerm(filterTerm)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(FilterBoxContainer);
