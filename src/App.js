import React, { useContext } from 'react';
import classNames from 'classnames';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";

import { store } from 'context';
import Home from 'views/Home';
import LogIn from 'views/LogIn';
import PrivateRoute from 'components/PrivateRoute';
import history from './history';

import style from './App.module.scss';
import Communication from './views/Communication';


function App() {
  const onThemeToggle = () => {
    dispatch({type: 'SWITCH_THEME'});
  };

  const {theme, user, dispatch} = useContext(store);

  return (
    <Router history={history}>
      <div className={classNames(style.root, style[theme])}>
        <header className={style.header}>
          <h1>an opinionated ReactJS dev journey</h1>
          <div className={style.toggle} onClick={onThemeToggle}>
            <i className={classNames("las", "la-moon", style.icon, theme === 'dark' && style.dark)}></i>
            <i className={classNames("las", "la-sun", style.icon, theme === 'light' && style.light)}></i>
          </div>
        </header>
        <main>
          <Switch>
            <PrivateRoute path="/login" validation={!user} component={LogIn} redirect='/' />
            <PrivateRoute path="/communication" validation={!!user} component={Communication} />
            <Route path="/" exact component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
