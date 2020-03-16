import React, { Component }       from 'react';
import { NavLink, Switch, Route } from "react-router-dom";

const DashboardNav = ( props ) => {


	return ( <ul>
		<li><NavLink to='/dashboard/item_1'>Item 1</NavLink></li>
		<li><NavLink to='/dashboard/item_2'>Item 2</NavLink></li>
	</ul> );
};


class Dashboard extends Component {
	render() {
		return (
			<>
				<DashboardNav/>
				<div>
					<Switch>
						<Route path={'/dashboard/item_1'}>
							<h1>ITEM_1 Content</h1>
						</Route>
						<Route path={'/dashboard/item_2'}>
							<h1>ITEM_2 Content</h1>
						</Route>
					</Switch>
				</div>

			</>
		);
	}
}

export default Dashboard;