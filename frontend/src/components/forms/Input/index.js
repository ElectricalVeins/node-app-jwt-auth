import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';

const Input = ( { field, form, meta, InputInvalidStyle, InputValidStyle, InputStyle, ...props } ) => {

	const inputClassName = classNames( InputStyle, {
		[ InputInvalidStyle ]: ( meta.touched && meta.error ),
		[ InputValidStyle ]: ( meta.touched && !meta.error ),
	} );

	return (
		<input className={inputClassName}
					 {...field}
					 {...props}/>
	);
};

Input.propTypes = {
	placeholder: PropTypes.string,
	InputInvalidStyle: PropTypes.string,
	InputValidStyle: PropTypes.string,
	InputStyle: PropTypes.string,
};

export default Input;