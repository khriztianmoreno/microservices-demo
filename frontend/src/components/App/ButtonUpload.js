import React from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import filterActions from '../../redux/actions/buttonActions';

const ButtonUpload = ({ upload, uploadImage }) => {
  return (
    <FloatingActionButton
      disabled={!upload}
      onTouchTap={() => uploadImage()}
    >
      <i className="material-icons">file_upload</i>
    </FloatingActionButton>
  );
};

const mapStateToProps = state => ({
  upload: state.upload,
});

const mapDispatchToProps = dispatch => ({
  setUpload(upload){ return dispatch(buttonActions(upload)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonUpload);
