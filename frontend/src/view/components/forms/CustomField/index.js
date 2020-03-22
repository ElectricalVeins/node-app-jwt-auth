import React              from "react";
import { Field }          from "formik";
import Label              from "../Label";
import Input              from "../Input";
import StyledErrorMessage from "../StyledErrorMessage";
import PropTypes          from "prop-types";


const CustomField = ( {inputStyles, errorStyle,...customFieldProps} ) => {

	return (
		<Field {...customFieldProps} >
			{
				( fieldProps ) => (
					<Label>
						<Input {...fieldProps} {...customFieldProps} {...inputStyles}/>
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
	inputStyles: PropTypes.shape( {
		inputStyle: PropTypes.string,
		inputValidStyle: PropTypes.string,
		inputInvalidStyle: PropTypes.string,
	} )

};

export default CustomField