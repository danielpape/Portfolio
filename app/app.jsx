var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Work = require('Work');
var Contact = require('Contact');
var Eve = require('Eve');
var Home = require('Home');

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="work" component={Work}/>
        <Route path="contact" component={Contact}/>
        <Route path="eve" component={Eve}/>
        <Route path="independent" component={Eve}/>
        <Route path="alta" component={Eve}/>
        <IndexRoute component={Home}/>
    </Route>
</Router>, document.getElementById('app'));
