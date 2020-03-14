import React              from "react";
import { Field }          from "formik";
import Label              from "../Label";
import Input              from "../Input";
import StyledErrorMessage from "../StyledErrorMessage";
import styles             from "./CustomField.module.scss";
import PropTypes          from "prop-types";


const CustomField = ( fieldProps ) => {
	const { placeholder, type, name } = fieldProps;
	return (
		<Field {...fieldProps} >
			{
				( fieldProps ) => (
				<Label>
					<Input {...fieldProps} placeholder={placeholder} type={type}/>
					<StyledErrorMessage name={name} className={styles.errorTip}/>
				</Label>
			)
			}
		</Field>
	);
};

CustomField.propTypes = {
	placeholder: PropTypes.string,
	type: PropTypes.string,
	name:PropTypes.string,
};

export default CustomField