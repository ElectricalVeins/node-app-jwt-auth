import {
	loginByEmail,
	signTokenPair,
	signUpUser
}                             from '../middlewares/authentication';
import express                from 'express';
import RefreshTokenController from '../controllers/refreshToken.js';
import jwt                    from 'jsonwebtoken';
import {
	checkRefreshToken,
	decodeAccessToken,
	findRefreshToken,
	updateRefreshToken,
	signAccessToken
}                             from '../middlewares/authentication/checkRefreshToken.js';


const authenticationRoute = express.Router();

authenticationRoute.post( '/sign_in',
	loginByEmail,
	signTokenPair,
	RefreshTokenController.createRefreshToken
);

authenticationRoute.post( 'sign_up',
	signUpUser,
	signTokenPair,
	RefreshTokenController.createRefreshToken
);

authenticationRoute.post( '/refresh_auth',
	checkRefreshToken,
	decodeAccessToken,
	findRefreshToken,
	updateRefreshToken,
	async ( req, res, next ) => {
		try {
			return res.send( {
				refreshToken: req.refreshToken.value,
				accessToken: jwt.sign( req.accessTokenPayload, 'secret', {
					expiresIn: '0.2h',
				} )
			} );

		} catch ( e ) {
			next( e );
		}
	}
);

authenticationRoute.post( '/refresh_tokens',
	checkRefreshToken,
	decodeAccessToken,
	findRefreshToken,
	updateRefreshToken,
	signAccessToken,
	async ( req, res, next ) => {
		res.send( {
			accessToken: req.accessToken,
			refreshToken: req.refreshToken,
		} );
	}
);

export default authenticationRoute;
