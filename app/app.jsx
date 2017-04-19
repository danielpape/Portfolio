var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Contact = require('Contact');
var Eve = require('Eve');
var Independent = require('Independent');
var Home = require('Home');
var EveningStandard = require('EveningStandard');
var About = require('About');
// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="contact" component={Contact}/>
        <Route path="eve" component={Eve}/>
        <Route path="independent" component={Independent}/>
        <Route path="eveningstandard" component={EveningStandard}/>
        <Route path="about" component={About}/>
        <IndexRoute component={Home}/>
    </Route>
</Router>, document.getElementById('app'));
