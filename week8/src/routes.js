import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';
import UsersPage from './components/UsersPage';
import SingleUserPage from './components/SingleUserPage';
import NotFoundPage from './components/NotFoundPage';


export default (
  <Route path="/">
  	//<IndexRoute component={UsersPage}/>
    <IndexRedirect to="/users" />
    	<Route path ="/users" component={UsersPage} />
	  	<Route path ="/users/:username" component={SingleUserPage} />

    <Route path="*" component={NotFoundPage} />
  </Route>
);
