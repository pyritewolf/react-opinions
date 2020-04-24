import React from 'react';
import { withRouter } from 'react-router-dom';

import Card from 'components/Card';
import Input from 'components/Input';

import style from './style.module.scss';

function Home ({history}) {
    
    return (
        <div className={style.root}>
            <Card hoverable onClick={() => history.push('/communication')}>
                <h2 className={style.title}>#1: Communication matters</h2>
                <p>An overview of all the means of <strong>communication</strong> a component could use</p>
            </Card>
        </div>
    );
}

export default withRouter(Home);