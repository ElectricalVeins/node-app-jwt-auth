import React       from 'react';
import PropTypes   from 'prop-types';
import { NavLink } from "react-router-dom";
import Icon        from "@mdi/react";

const NavItem = ( props ) => {
	const { iconOptions, liClassName, isMenuOpen, ...rest } = props;
	return (
		<li className={liClassName}>
			<NavLink {...rest}>
				<Icon path={props.icon}
							{...props.iconOptions}/>
				{
					isMenuOpen
					? ( <span>{props.children}</span> )
					: ( <span>{null}</span> )
				}
			</NavLink>
		</li>
	)
};

NavItem.propTypes = {
	liClassName: PropTypes.string,
	activeClassName: PropTypes.string,
	className: PropTypes.string,
	to: PropTypes.string.isRequired,
	children: PropTypes.node,
	iconOptions: PropTypes.object,
	isMenuOpen: PropTypes.bool,
};

export default NavItem;