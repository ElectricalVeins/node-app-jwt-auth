import React, { Component, useState } from 'react';
import { withRouter, Route } from 'react-router';
import styles from './HomePage.module.scss';
import classNames from 'classnames';
import AppContext from '../state';
import { THEME_MODE } from '../constants';

class HomePage extends Component {

  changeTheme = () => {
    const { state: appState, setState: appSetState } = this.context;
    appSetState({
                  theme: appState.theme === THEME_MODE.LIGHT
                         ? THEME_MODE.DARK
                         : THEME_MODE.LIGHT
                });
  };

  addValueToAppState = () => {
    this.context.setState({ items: [1, 2, 3, 4, 5] });
  };

  render () {
    /*//своцства класса
    this.props;
    this.state;
    this.context;

    //методы экзмепляра
    this.setState();
    this.forceUpdate()*/

    const contextValue = this.context;

    const appState = contextValue.state;

    return (
      <>
        <h1>{JSON.stringify(appState, null, 4)}</h1>
        <button onClick={this.changeTheme}> Change Theme</button>
        <button onClick={this.addValueToAppState}> Change App State</button>
      </>
    );
  }
}

HomePage.defaultProps = {};
HomePage.propTypes = {};

HomePage.contextType = AppContext;

export default withRouter(HomePage);