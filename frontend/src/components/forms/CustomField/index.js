import React              from "react";
import { Field }          from "formik";
import Label              from "../Label";
import Input              from "../Input";
import StyledErrorMessage from "../StyledErrorMessage";
import PropTypes          from "prop-types";


const CustomField = ( {InputStyles, errorStyle,...customFieldProps} ) => {

	return (
		<Field {...customFieldProps} >
			{
				( fieldProps ) => (
					<Label>
						<Input {...fieldProps} {...customFieldProps} {...InputStyles}/>
						<StyledErrorMessage {...customFieldProps} className={errorStyle}/>
					</Label>
				)
			}
		</Field>
	);
};

CustomField.propTypes = {
	placeholder: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	errorStyle: PropTypes.string,
	InputStyles: PropTypes.shape( {
		InputStyle: PropTypes.string,
		InputValidStyle: PropTypes.string,
		InputInvalidStyle: PropTypes.string,
	} )

};

export default CustomField