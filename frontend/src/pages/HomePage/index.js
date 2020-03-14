import React, { Component, useState } from 'react';
import { withRouter, Route }          from 'react-router';
import styles                         from './HomePage.module.scss';
import classNames                     from 'classnames';
import { THEME_MODE }                 from '../../constants';
import Navigation                     from '../../components/Navigation';
import PageHeader                     from '../../components/PageHeader';
import withAppContext                 from '../../components/HoCs/withAppContext.js';

class Index extends Component {

	changeTheme = () => {
		const { state: appState, setState: appSetState } = this.props;
		appSetState( {
			theme: appState.theme === THEME_MODE.LIGHT
						 ? THEME_MODE.DARK
						 : THEME_MODE.LIGHT
		} );
	};

	addValueToAppState = () => {
		this.props.setState( {
			items: [ 1, 2, 3, 4, 5 ]
		} );
	};

	render() {
		/*//своцства класса
		this.props;
		this.state;
		this.context;

		//методы экзмепляра
		this.setState();
		this.forceUpdate()*/

		const contextValue = this.props;

		const appState = contextValue.state;

		return (
			<>
				<PageHeader/>
				<Navigation/>
				<h1>{JSON.stringify( appState, null, 4 )}</h1>
				<button onClick={this.changeTheme}> Change Theme</button>
				<button onClick={this.addValueToAppState}> Change App State</button>
			</>
		);
	}
}

export default withRouter( withAppContext( Index ) );