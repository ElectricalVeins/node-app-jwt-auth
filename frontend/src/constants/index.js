import * as Yup from "yup";

export const THEME_MODE = Object.freeze( {
	LIGHT: 'LIGHT',
	DARK: 'DARK',
} );

export const PASSWORD_REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
export const PASSWORD_TIP = 'Minimum eight characters, at least one upper case English letter, one lower case English letter';

export const SIGN_UP_SCHEMA = Yup.object().shape( {
	firstName: Yup.string()
								.trim()
								.min( 4 )
								.max( 255 )
								.required()
								.label( 'First name' ),
	lastName: Yup.string()
							 .trim()
							 .min( 4 )
							 .max( 255 )
							 .required()
							 .label( 'Last name' ),
	email: Yup.string()
						.email()
						.required()
						.label( 'Email' ),
	password: Yup.string()
							 .min( 8 )
							 .matches( PASSWORD_REGEXP, PASSWORD_TIP )
							 .required()
							 .label( 'Password' ),
	confirmPassword: Yup.string()
											.min( 8 )
											.oneOf( [ Yup.ref( 'password' ), null ], 'Passwords must match' )
											.required()
											.label( 'Password' ),
} );

export const LOGIN_SCHEMA = Yup.object().shape( {
	email: Yup.string()
						.email()
						.required()
						.label( 'Email' ),
	password: Yup.string()
							 .min( 8 )
							 .matches( PASSWORD_REGEXP,
								 PASSWORD_TIP )
							 .required()
							 .label( 'Password' ),
} );