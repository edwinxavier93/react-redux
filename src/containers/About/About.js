import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { provideHooks } from 'redial';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';

@provideHooks({
  defer: ({ store: { dispatch, getState } }) => {
    if (!isInfoLoaded(getState())) {
      return dispatch(loadInfo()).catch(() => null);
    }
  }
})
@connect(state => ({
  info: state.info.data
}))
export default class About extends Component {
  static propTypes = {
    info: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    info: null
  };

  render() {
    const { info } = this.props;
    return (
      <div className="container">
        <Helmet title="About Us" />
        <h1>About Us</h1>
        {info && info.map(infoList => <div key={infoList.id}>{infoList.name}</div>)}
      </div>
    );
  }
}
