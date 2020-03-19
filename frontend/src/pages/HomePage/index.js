import React, { Component, useState } from 'react';
import { withRouter, Route }          from 'react-router';
import styles                         from './HomePage.module.scss';
import Navigation                     from '../../components/Navigation';
import withAppContext                 from '../../components/HoCs/withAppContext.js';
import { getUsers }                   from "../../api/admin.js";

class HomePage extends Component {

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
				<Navigation/>
				<h1>{JSON.stringify( appState, null, 4 )}</h1>

				<button onClick={() => {
          getUsers()
        }}>
					GET IT!
				</button>

			</>
		);
	}
}

export default withRouter( withAppContext( HomePage ) );