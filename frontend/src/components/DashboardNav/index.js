import classNames  from "classnames";
import styles      from "./DashboardNav.module.scss";
import { NavLink } from "react-router-dom";
import NavItem     from "../NavItem";
import {
	mdiApps,
	mdiAws,
	mdiBasket,
	mdiBulletinBoard,
	mdiCommentText,
	mdiHelpCircleOutline,
	mdiShareVariant
}                  from "@mdi/js";
import React       from "react";

const DashboardNav = ( props ) => {

	const { isMenuOpen } = props;
	const logoClass = classNames( { [ styles.navLogo ]: !isMenuOpen } );
	const computedClassName = classNames( styles.navigationContainer,
		{
			[ styles.navigationContainerOpen ]: isMenuOpen,
			[ styles.navigationContainerClose ]: !isMenuOpen
		}
	);

	const imgSrc = isMenuOpen
								 ? "https://www.squadhelp.com/img/logo.png"
								 : 'https://www.squadhelp.com/img/SquadHelpSquareWhiteTransparentSmall.png';
	return (
		<nav className={computedClassName}
			/*className={styles.navigationContainer}*/
		>

			<NavLink to="/">
				<img src={imgSrc} alt="logo" className={logoClass}/>
			</NavLink>
			{
				isMenuOpen
				? ( <div className={styles.divider}>Navigation</div> )
				: null
			}
			<ul>
				<NavItem to='/dashboard/item_1'
								 children={'Names For Sale'}
								 icon={mdiApps}
								 {...props}/>
				<NavItem to='/dashboard/item_2'
								 children={'Contests'}
								 icon={mdiAws}
								 {...props}/>
				<NavItem to='/dashboard/item_3'
								 children={'Transactions'}
								 icon={mdiBasket}
								 {...props}/>
				<NavItem to='/dashboard/item_4'
								 children={'Transactions'}
								 icon={mdiBulletinBoard}
								 {...props}/>
				<NavItem to='/dashboard/item_5'
								 children={'My Account'}
								 icon={mdiCommentText}
								 {...props}/>
				<NavItem to='/dashboard/item_6'
								 children={'Affiliate Dashboard'}
								 icon={mdiShareVariant}
								 {...props}/>
				<NavItem to='/dashboard/item_7'
								 children={'Help'}
								 icon={mdiHelpCircleOutline}
								 {...props}/>
			</ul>
		</nav> );
};

export default DashboardNav;