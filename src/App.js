import React from 'react';
import style from './App.module.scss';
import Card from 'components/Card';

function App() {
  return (
    <div className={style.root}>
      <header className={style.header}>
        <h1>an opinionated ReactJS dev journey</h1>
      </header>
      <main>
        <Card hoverable>
          <h2 className={style.title}>#1: Communication matters</h2>
          <p>An overview of all the means of <strong>communication</strong> a component could use</p>
        </Card>
      </main>
    </div>
  );
}

export default App;
