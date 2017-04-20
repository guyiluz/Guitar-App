var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Body = require('Body');
var About = require('About');
var Examples = require('Examples');
var Main =require('Main')
var Song =require('Song')

//load diundatiun

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App css
require('style!css!applicationStyles')

ReactDOM.render(

  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <Route path="song" component={Song} />
      <IndexRoute component={Body}/>

    </Route>
  </Router>,
  document.getElementById('app')
);
