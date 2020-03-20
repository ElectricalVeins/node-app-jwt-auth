import React, { lazy, Suspense, Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route }                from 'react-router-dom';
import './App.css';
import { REFRESH_TOKEN_KEY, THEME_MODE }                         from './constants';
import AppContext                                                from './store';
import AuthRoute                                                 from "./components/AuthRoute";
import AccessRoute                                               from "./components/AccessRoute";
import { loginUserByRefreshToken }                               from "./api/auth";

const SignUpPage = lazy( () => import( './pages/SignUpPage/' ) );
const SignInPage = lazy( () => import( './pages/SignInPage/' ) );
const HomePage = lazy( () => import( './pages/HomePage' ) );
const TestList = lazy( () => import( './components/TestList' ) );
const Dashboard = lazy( () => import('./pages/DashboardPage') );
const AdminPage = lazy( () => import('./pages/AdminPage') );

const fallbackElem = <div className='loader'>Loading...</div>;


function App() {

/*
	const [ user, setUser ] = useState( null )

	useEffect( () => {
		const refreshToken = localStorage.getItem( REFRESH_TOKEN_KEY );
		if( refreshToken ) {
			loginUserByRefreshToken().then( res => {
				const { data: { user } } = res;
				setUser( user );
			} )
		}
	}, [] );
*/

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