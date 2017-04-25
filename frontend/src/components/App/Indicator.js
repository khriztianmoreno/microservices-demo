import React from 'react';
import { connect } from 'react-redux';

const Indicator = ({ filter }) => {
  return (
    <div>
      <strong>Filter selected: {filter}</strong>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: state.filter,
});

export default connect(mapStateToProps)(Indicator);
