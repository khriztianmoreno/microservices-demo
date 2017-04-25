import React from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import filterActions from '../../redux/actions/filterActions';

const filters = [
  'grayscale',
  'sepia',
  'luminance',
  'brighten',
  'darken',
  'opacity',
  'negaposi',
  'brightnessContrast',
  'huerotate',
  'saturate',
  'verticalFlip',
  'doubleFlip',
  'horizontalMirror',
  'verticalMirror',
  'XYMirror'
];

const Filters = ({filter, setFilter}) => {
  return (
    <div>
      <SelectField
        floatingLabelText="Filtros"
        value={filter}
        onChange={(e, i, v) => setFilter(v)}
      >
        {
          filters.map((filter, i) => (
            <MenuItem key={i} value={filter} primaryText={filter} />
          ))
        }
      </SelectField>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  setFilter(filter){ return dispatch(filterActions(filter)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
