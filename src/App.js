import React, { useState, useContext } from 'react';
import classNames from 'classnames';

import Card from 'components/Card';
import Input from 'components/Input';

import { store } from './context';
import style from './App.module.scss';


function App() {
  const DINOSAURS_I_LOVE = ['triceratops', 't-rex', 'velociraptor', 'ankylosaurus', 'tyrannosaurus rex', 'apatosaurus', 'stegosaurus', 'utahraptor', 'megalosaurus'];
  const [dinosaur, setDinosaur] = useState({value: '', error: false});

  const handleDinosaurChange = (event) => {
    let value = event.target.value || '';
    let error = !value || DINOSAURS_I_LOVE.includes(value.toLowerCase()) ? false : `I don't particularly like that dinosaur >:c`;
    setDinosaur({value, error});
  }

  const onThemeToggle = () => {
    dispatch({type: 'SWITCH_THEME'});
  };

  const {theme, dispatch} = useContext(store);

  return (
    <div className={classNames(style.root, style[theme])}>
      <header className={style.header}>
        <h1>an opinionated ReactJS dev journey</h1>
        <div className={style.toggle} onClick={onThemeToggle}>
          <i className={classNames("las", "la-moon", style.icon, theme === 'dark' && style.dark)}></i>
          <i className={classNames("las", "la-sun", style.icon, theme === 'light' && style.light)}></i>
        </div>
      </header>
      <main>
        <Card hoverable>
          <h2 className={style.title}>#1: Communication matters</h2>
          <p>An overview of all the means of <strong>communication</strong> a component could use</p>
          <Input placeholder="Tell me a dinosaur name" value={dinosaur.value} error={dinosaur.error} onChange={handleDinosaurChange} />
        </Card>
      </main>
    </div>
  );
}

export default App;
