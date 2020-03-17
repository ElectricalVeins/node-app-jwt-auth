import React, { lazy, Suspense, Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route }     from 'react-router-dom';
import './App.css';
import { THEME_MODE }                                 from './constants';
import AppContext                                     from './store';
import AuthRoute                                      from "./components/AuthRoute";
import AccessRoute                                    from "./components/AccessRoute";

const SignUpPage = lazy( () => import( './pages/SignUpPage/' ) );
const SignInPage = lazy( () => import( './pages/SignInPage/' ) );
const HomePage = lazy( () => import( './pages/HomePage' ) );
const TestList = lazy( () => import( './components/TestList' ) );
const Dashboard = lazy( () => import('./pages/DashboardPage') );
const AdminPage = lazy( () => import('./pages/AdminPage') );

const fallbackElem = <div className='loader'>Loading...</div>;


function App() {

	const [ user, setUser ] = useState( null )


	return (
		<AppContext.Provider value={{ user, setUser }}>
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
			</AppContext.Provider>
		);
	}


export default App;