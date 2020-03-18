import React                            from 'react';
import { withFormik, Form, FieldArray } from 'formik';
import styles                           from './SignUpForm.module.scss'
import CustomField                      from "../CustomField";
import { SIGN_UP_SCHEMA }               from '../../../constants';
import errorStyles                      from '../StyledErrorMessage/StyledErrorMessage.module.scss'
import inputStyles                      from '../Input/Input.module.scss'
import { signUpUser }                   from "../../../api/auth";

const inputStylesProp = {
	inputStyle: inputStyles.inputStyle,
	inputValidStyle: inputStyles.inputValidStyle,
	inputInvalidStyle: inputStyles.inputInvalidStyle
};

const SignUpForm = ( props ) => {
	const {
		values,
		isSubmitting,
	} = props;

	return (
		<Form className={styles.formContainer}>

			<FieldArray name='fields' render={arrayHelpers => (
				values.fields.map( fieldValues => (
					<CustomField key={fieldValues.name}
											 value={values[ fieldValues.name ]}
											 errorStyle={errorStyles.errorTip}
											 inputStyles={inputStylesProp}
											 {...fieldValues} />
				) ) )}>


			</FieldArray>

			<button
				onClick={props.submitForm}
				type="submit"
				className={styles.submitButton}
				disabled={isSubmitting}>
				Create account
			</button>
		</Form>
	);
};

export default withFormik( {
	mapPropsToValues: () => ( {
		fields: [
			{
				name: 'firstName',
				placeholder: 'First Name',
				type: 'text',
			}, {
				name: 'lastName',
				placeholder: 'Last Name',
				type: 'text',
			}, {
				name: 'email',
				placeholder: 'Email address',
				type: 'email',
			}, {
				name: 'password',
				placeholder: 'Password',
				type: 'password',
			}, {
				name: 'confirmPassword',
				placeholder: 'Confirm password',
				type: 'password',
			}
		],
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	} ),
	handleSubmit: async ( values, formikBag ) => {
		formikBag.setSubmitting( true );
		try {
			const { email, password } = values;

			const { data: { user } } = await signUpUser( { email, password } );

			formikBag.props.onSubmit( user );
		} catch ( e ) {
			alert( e.response.data );
		}
	},
	validationSchema: SIGN_UP_SCHEMA,
} )( SignUpForm );


/*
			<CustomField name='firstName' type='text' placeholder='First Name'/>
			<CustomField name='lastName' type='text' placeholder='Last Name'/>
			<CustomField name='email' type='email' placeholder='Email'/>
			<CustomField name='password' type='password' placeholder='Password'/>
			<CustomField name='confirmPassword' type='password' placeholder='Confirm Password'/>
*/