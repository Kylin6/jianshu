import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Iconstyle } from './statice/iconfont/iconfont';
import { Globalstyle } from './style';

const element = (
    <div>
        <Globalstyle/>
        <Iconstyle/>
        <App/>
    </div>
);

ReactDOM.render(element, document.getElementById('root'));
