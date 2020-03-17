import React          from 'react';
import withAppContext from '../HoCs/withAppContext.js';
import styles         from './PageHeader.module.scss'
import Icon           from "@mdi/react";

import { mdiMenu } from "@mdi/js";


const PageHeader = ( props ) => {

	const { setIsMenuOpen, isMenuOpen, ...rest } = props;

	const clickHandler = () => {
		setIsMenuOpen( !isMenuOpen )
	};

	return (
		<header className={styles.headerContainer}>
			<label>
				<input type='checkbox' onClick={clickHandler} className={styles.checkbox}/>
				<Icon path={mdiMenu} size='24px' className={styles.burgerBtn}/>
			</label>
			<div className={styles.userCard}>
				{JSON.stringify( rest, null, 4 )}
			</div>
		</header>
	);
};

export default withAppContext( PageHeader );