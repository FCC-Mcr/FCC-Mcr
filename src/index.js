//require('./styles/otherstyles.sass')
require('./styles/main.sass') // root stylesheeet - .css, .scss or .sass

//Main react imports.
import React from 'react';
import ReactDOM from 'react-dom';

// root components.
import App from './components/App';
// routing components
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';


const MainRouter = () => (
  (
    <Router history={browserHistory}>
      <Route path="/" component={ App }>
        <IndexRoute >test</IndexRoute>
      </Route>
    </Router>
  )
);

/*
<IndexRoute component={ HomePage }></IndexRoute> // default page
<Route path='/about' component={About}></Route>  // pages to come
*/



ReactDOM.render(<MainRouter/>, document.querySelector('#root'));
