import React from 'react';

import './index.css';

import App from './App';

import Ul from './Ul';
import Game from './Game';


class Home extends React.Component{
    render(){
        return [
                <div key={"rroot"}><App /></div>,
                <h1 key={"h"}>Hello, world!</h1>,
                <div key={"uul"}><Ul name={"i am name"} /></div>,
                <div key={"ggame"}><Game value={1} /></div>,
            ];
    }
}

export default Home;
