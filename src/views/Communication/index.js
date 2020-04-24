import React, { useState, useContext } from 'react';
import classNames from 'classnames';

import Card from 'components/Card';
import Input from 'components/Input';
import Button from 'components/Button';

import style from './style.module.scss';
import { store } from 'context';

function Communication () {
    const DINOSAURS_I_LOVE = ['triceratops', 't-rex', 'velociraptor', 'ankylosaurus', 'tyrannosaurus rex', 'apatosaurus', 'stegosaurus', 'utahraptor', 'megalosaurus'];
    const [dinosaur, setDinosaur] = useState({value: '', error: false});
  
    const handleDinosaurChange = (event) => {
      let value = event.target.value || '';
      let error = !value || DINOSAURS_I_LOVE.includes(value.toLowerCase()) ? false : `I don't particularly like that dinosaur >:c`;
      setDinosaur({value, error});
    }

    const {theme, user} = useContext(store);
    
    return (
        <div className={classNames(style.root, style[theme])}>
            <Card>
                <h2>Props</h2>
                <p>A parent can send any info to their direct children through <strong>props</strong>.</p>
                <p>Here's an example of different buttons rendered with different prop info!</p>
                <div className={style.propsExample}>
                    <Button>standard button</Button><Button appearance="outline">outline button!</Button>
                    <Button color="secondary">standard button but in a different color</Button><Button appearance="outline" color="secondary">outline button but in a different color!</Button>
                    <Button color="grey" size="sm">another color, another size</Button><Button color="grey" size="lg">and now it's big!</Button>
                </div>
                <p>Props can be changed dynamically (ie. with info you get from an API!) but they'll trigger an update cycle in react ♻️</p>
                <div className={style.pills}>
                    <span>parent to children</span>
                    <span>standard reactJS</span>
                </div>
            </Card>

            <Card>
                <h2>Callbacks</h2>
                <p>A parent can send their children a <strong>callback</strong>, and with it, they can send information back.</p>
                <p>This input sends its value to the view component, to be stored and displayed here: {dinosaur.value}.</p>
                <Input placeholder="Tell me a dinosaur name" value={dinosaur.value} error={dinosaur.error} onChange={handleDinosaurChange} />
                <p>Callbacks can be called by the children as many times as they want!</p>
                <div className={style.pills}>
                    <span>children to parent</span>
                    <span>standard reactJS</span>
                </div>
            </Card>

            <Card>
                <h2>Context</h2>
                <p>A parent can send information to all their descendants through a <strong>context</strong>, and anyone below that parent can consume it.</p>
    <p>Right now, by context, I know you picked the username {user.username} and the current theme is {theme}</p>
                <div className={style.pills}>
                    <span>parent to descendants</span>
                    <span>standard reactJS</span>
                </div>
            </Card>

            <Card>
                <h2>Router</h2>
                <p>When moving through views, you might want to send some information that's not relevant to the entirety of the app, but it's necessary for the target view to function properly.</p>
                <p>When you tried to access this view, you were redirected to a LogIn. If you check out how <strong>PrivateRoute</strong> works in this repo, you'll see that this is what happened:</p>
                <ol>
                    <li>I checked if anyone was <strong>logged in</strong></li>
                    <li>Since there was no one, and I only want to show this view to users, I <strong>redirected</strong> you to the log in...
                        <ul>
                            <li>But I wanted to remember <strong>where the heck you were going</strong>!!</li>
                            <li>So, the PrivateRoute component sent the LogIn some extra info: the route that you intended to visit!</li>
                        </ul>
                    </li>
                    <li>When you actually log in, we use that stored information to redirect you to the page you wanted to see (this one!)</li>
                </ol>
                <div className={style.pills}>
                    <span>view to view</span>
                    <span>external library</span>
                </div>
            </Card>
        </div>
    );
}

export default Communication;