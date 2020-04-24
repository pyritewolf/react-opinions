import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
    validation,
    component: Component,
    redirect = '/login',
    ...rest
}) => (
    <Route {...rest} render={props => (
        validation ?
            <Component {...props} />
        : <Redirect to={{
            pathname: redirect,
            state: {
              from: props.location,
            },
          }} />
    )} />
);

export default PrivateRoute;