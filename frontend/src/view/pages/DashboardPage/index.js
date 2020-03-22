import React, { useState } from 'react';
import { Switch, Route }   from "react-router-dom";
import styles              from './DashboardPage.module.scss'
import PageHeader          from "../../components/PageHeader";
import DashboardNav        from "../../components/DashboardNav";


function Dashboard( props ) {
  const iconOptions = {
    color: 'white',
    size: '20px',
    className: styles.icon,
  };

  const [ isMenuOpen, setIsMenuOpen ] = useState( true );

	return (
		<div className={styles.container}>

			<DashboardNav isMenuOpen={isMenuOpen}
										liClassName={styles.liClassName}
										activeClassName={styles.activeNav}
										className={styles.navItem}
										iconOptions={iconOptions}/>

			<div className={styles.pageHeader}>

				<PageHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>

				<Switch>
					<Route path={'/dashboard/item_1'}>
						<h1>ITEM_1 Content</h1>
					</Route>
					<Route path={'/dashboard/item_2'}>
						<h1>ITEM_2 Content</h1>
					</Route>
					<Route path={'/dashboard/item_3'}>
						<h1>ITEM_3 Content</h1>
					</Route>
					<Route path={'/dashboard/item_4'}>
						<h1>ITEM_4 Content</h1>
					</Route>
					<Route path={'/dashboard/item_5'}>
						<h1>ITEM_5 Content</h1>
					</Route>
					<Route path={'/dashboard/item_6'}>
						<h1>ITEM_6 Content</h1>
					</Route>
					<Route path={'/dashboard/item_7'}>
						<h1>ITEM_7 Content</h1>
					</Route>
				</Switch>
			</div>

		</div>
	);

}

export default Dashboard;