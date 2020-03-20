import 'react-native-gesture-handler';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import navigation from '~/services/navigation';

import createRouter from './routes';

class App extends Component {
  static propTypes = {
    auth: PropTypes.shape({
      signed: PropTypes.bool,
    }).isRequired,
  };

  registerService = ref => {
    navigation.setTopLevelNavigator(ref);
  };

  render() {
    const { auth } = this.props;
    const Routes = createRouter(auth.signed);
    return <Routes ref={this.registerService} />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
