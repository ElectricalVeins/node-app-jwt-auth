import { User } from '../../models';

import { BadRequestError } from '../../utils/errors';

import bcrypt from 'bcrypt';


export default async ( req, res, next ) => {

	const { body: { email, password, firstName, lastName } } = req;
	const passHash = bcrypt.hash( password, bcrypt.genSalt( 6 ) );

	const newUser = {
		email,
		passHash,
		firstName,
		lastName
	};

	try {
		const user = await User.create( newUser );
		if( user ) {
			req.user = user;
			return next();
		}
		next( new BadRequestError( 'something went wrong' ) );
	} catch ( e ) {
		next( e );
	}
};

