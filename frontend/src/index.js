import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './redux/store';
import App from './components/App';

injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='*' component={App} />
        </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
