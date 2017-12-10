import React from 'react';
import {Link}  from 'react-router-dom';

export default class Navbar extends React.Component {
    componentDidMount() {
        const jsSource = 'document.querySelector(".navbar-header button").addEventListener("click",function(){document.getElementById("navbar").classList.toggle("in")});';
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = jsSource;

        document.body.appendChild(s);
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <Link to="/" className="navbar-brand">Wayne</Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/resume">resume</Link></li>
                    <li><Link to="/resume/json">resume json</Link></li>
                    <li><a href="https://github.com/whensky/react" target="_blank" rel="noopener noreferrer">resume github</a></li>
                    <li><Link to="/app">app</Link></li>
                    <li><Link to="/app/app">app/app</Link></li>
                    <li><Link to="/app/app/app">app/app/app</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
        );
    }
}
