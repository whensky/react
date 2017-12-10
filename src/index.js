import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './Navbar';

import Home from './Home';
import App from './App';
import Ul from './Ul';

import Resume from './Resume';
import ResumeJson from './ResumeJson';

ReactDOM.render(
    <Router>
        <div>
            <Navbar />

            <Route exact path="/" component={Home}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/resume/json" component={ResumeJson}/>
            <Route path="/app" component={App}/>
            <Route exact path="/app/app" component={Ul}/>
            <Route exact path="/app/app/app" component={App}/>
        </div>
    </Router>,
    document.getElementById('container')
);


registerServiceWorker();
