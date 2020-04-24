import React, { useState, useContext } from 'react';
import { useLocation } from "react-router-dom";

import { store } from 'context';
import Card from 'components/Card';
import Input from 'components/Input';
import Button from 'components/Button';

import style from './style.module.scss';

function LogIn () {
    const [logIn, setLogIn] = useState({
        username: {value: '', error: false},
        password: {value: '', error: false},
    });

    const {dispatch} = useContext(store);
    const location = useLocation();
  
    const handleLogInChange = (fieldName) => (event) => {
        let value = event.target.value || '';
        let error = value ? false : `I really wanna know your ${fieldName}`;
        setLogIn({
            ...logIn,
            [fieldName]: {value, error}
        });
    }

    const handleSubmit = () => {
        dispatch({type: 'LOG_IN', payload: {
            user: {
                username: logIn.username.value,
                password: logIn.password.value,
            },
            from: location.state && location.state.from,
        }})
    }
    
    return (
        <div className={style.root}>
            <Card>
                <h2>Try and log in!</h2>
                <p>Don't worry, there's no way to get this wrong</p>
                <Input placeholder="Your username 🤖" value={logIn.username.value} error={logIn.username.error} onChange={handleLogInChange('username')} />
                <Input placeholder="Enter your password! 🔐" value={logIn.password.value} error={logIn.password.error} onChange={handleLogInChange('password')} />
                <Button appearance="block" disabled={Object.values(logIn).some(field => !!field.error)} onClick={handleSubmit}>Log in</Button>
            </Card>
        </div>
    );
}

export default LogIn;