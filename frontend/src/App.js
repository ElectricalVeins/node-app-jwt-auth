import React, { lazy, Suspense, Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect }      from 'react-router-dom';
import './App.css';
import { REFRESH_TOKEN_KEY, THEME_MODE }                         from './constants';
import AppContext                                                from './redux/store';
import AuthRoute                                                 from "./view/components/AuthRoute";
import AccessRoute                                               from "./view/components/AccessRoute";
import { loginUserByRefreshToken }                               from "./api/auth";

const SignUpPage = lazy( () => import( './view/pages/SignUpPage/' ) );
const SignInPage = lazy( () => import( './view/pages/SignInPage/' ) );
const HomePage = lazy( () => import( './view/pages/HomePage' ) );
const TestList = lazy( () => import( './view/components/TestList' ) );
const Dashboard = lazy( () => import('./view/pages/DashboardPage') );
const AdminPage = lazy( () => import('./view/pages/AdminPage') );

const fallbackElem = <div className='loader'>Loading...</div>;


function App() {


	const [ user, setUser ] = useState( null );

	useEffect( () => {
		const refreshToken = localStorage.getItem( REFRESH_TOKEN_KEY );

		if( refreshToken ) {
			loginUserByRefreshToken().then( res => {
				const { data: { user } } = res;
				setUser( user );
			} )
		}
	}, [] );


	return (
			<Router>
				<Suspense fallback={fallbackElem}>
					<Switch>
						<Route exact path="/"
									 component={HomePage}/>
						<Route path={[ '/signup', '/sign_up' ]}
									 component={SignUpPage}/>
						<Route path={[ '/signin', '/sign_in', '/login' ]}
									 component={SignInPage}/>
						<Route path='/testList'
									 component={TestList}/>
						<Route to='/login' path='/dashboard'
									 component={Dashboard}/>
						{/*			<AccessRoute permissions={[ 'ADMIN' ]} path='/admin'
												 to={'/hell'} component={AdminPage}/>*/}
					</Switch>
				</Suspense>
			</Router>
	);
}


export default App;