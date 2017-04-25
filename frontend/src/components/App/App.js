import React from 'react';
import { Route } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import './styles.css';

import Indicator from './Indicator';
import Filters from './Filters';
import ButtonUpload from './ButtonUpload';

import filterActions from '../../redux/actions/buttonActions';

const ButtonFilter = ({ filterImage, disabled }) => {
  return (
    <FloatingActionButton
      disabled={!disabled}
      className="fab filter"
      onTouchTap={() => filterImage()}
    >
      <i className="material-icons">format_paint</i>
    </FloatingActionButton>
  );
};

const App = (props) => {
  return (
    <div>
      <div className="container">
        {/* <div className="row main-container">

          <div className="col s8 offset-s2 m8 offset-m2 mrow">
            <Indicator />
          </div>

          <div className="col s8 offset-s2 m8 offset-m2 mrow">
            <Filters />
          </div>

          <div className="col s8 offset-s2 m8 offset-m2 mrow">
            <form encType="multipart/form-data">
              <input
                type="file"
                accept='image/*'
                onChange={e => {
                  props.setImage(e.target.files[0]);
                  props.setUpload(true);
                }}
              />
            </form>
          </div>

          <div className="col s8 offset-s2 m8 offset-m2 mrow">
            <img src={props.src} />
          </div>
        </div> */}

        <div className="row">
          <div className="col s6 offset-s3">
            <Card>
              <CardMedia>
                { props.src ? (<img src={props.src} className="img-card" />) : null }
              </CardMedia>
              <CardText>
                <div className="row main-container">
                  <div className="col s8 offset-s2 mrow">
                    <Filters />
                  </div>

                  <div className="col s8 offset-s2">
                    <form encType="multipart/form-data">
                      <input
                        type="file"
                        accept='image/*'
                        onChange={e => {
                          props.setImage(e.target.files[0]);
                          props.setUpload(true);
                        }}
                      />
                    </form>
                  </div>
                </div>
              </CardText>
            </Card>
          </div>
        </div>
      </div>

      <div className="fab"><ButtonUpload uploadImage={() => props.uploadImage()} /></div>
      <div className="fab"><ButtonFilter filterImage={() => props.filterImage()} disabled={props.toFilter} /></div>
    </div>
  );
};

export default App;