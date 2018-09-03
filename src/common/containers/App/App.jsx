import React from 'react';
import PropTypes from 'prop-types';
import renderRoutes from 'react-router-config/renderRoutes';
import { asyncConnect } from 'redux-connect';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Header from 'Components/Header/Header';
import theme from 'Layouts/theme';

const App = ({ route }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      {renderRoutes(route.routes)}
    </MuiThemeProvider>
  );
};

App.propTypes = {
  route: PropTypes.object.isRequired
};

let AppToExport;

if (__CONFIGS__.isDevServer) {
  const { hot } = require('react-hot-loader');
  AppToExport = hot(module)(App);
} else {
  AppToExport = App;
}

export default AppToExport;
