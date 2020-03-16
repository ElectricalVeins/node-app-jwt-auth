import React                            from 'react';
import { FieldArray, Form, withFormik } from 'formik';
import { LOGIN_SCHEMA }                 from '../../../constants';
import styles                           from './SignInForm.module.scss';
import CustomField                      from "../CustomField";
import errorStyles                      from "../StyledErrorMessage/StyledErrorMessage.module.scss";
import inputStyles                      from "../Input/Input.module.scss";

const inputStylesProp = {
	inputStyle: inputStyles.inputStyle,
	inputValidStyle: inputStyles.inputValidStyle,
	inputInvalidStyle: inputStyles.inputInvalidStyle
};

const SignInForm = ( props ) => {
	const {
		values,
		isSubmitting,
	} = props;

	return (
		<Form className={styles.formContainer}>

			<FieldArray name='fields'
									render={arrayHelpers => (
										values.fields.map( fieldValues => {
											console.log( fieldValues )
											return (
												<CustomField key={fieldValues.name}
																		 value={values[ fieldValues.name ]}
																		 errorStyle={errorStyles.errorTip}
																		 inputStyles={inputStylesProp}
																		 {...fieldValues} />
											)
										} )
									)}/>

			<button
				className={styles.submitButton}
				type="submit"
				disabled={isSubmitting}>
				Login
			</button>
		</Form>
	);
};

export default withFormik( {
	mapPropsToValues: () => ( {
		fields: [
			{
				name: 'email',
				placeholder: 'Email address',
				type: 'email',
			}, {
				name: 'password',
				placeholder: 'Password',
				type: 'password',
			},
		],
		email: '',
		password: '',
	} ),
	handleSubmit: ( values, formikBag ) => {
		console.log( values );
		console.log( formikBag );
	},
	validationSchema: LOGIN_SCHEMA,
} )( SignInForm );

/*
<CustomField name='email' type='email' value={values.email} placeholder='Email address'/>
<CustomField name='password' type='password' value={values.password} placeholder='Password'/>
*/

